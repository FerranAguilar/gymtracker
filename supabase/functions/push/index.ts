// GymTracker · Servidor de avisos push del descanso
//
// La app pide un aviso al empezar un descanso y lo cancela si el usuario sigue antes.
// Una tarea de Postgres (pg_cron) llama a "dispatch" cada 5 segundos, solo si hay
// avisos vencidos, y esta función los envía con Web Push.
//
// Acciones (POST JSON):
//   {action:"key"}                                            -> {publicKey}
//   {action:"schedule", id, subscription, delay, title, body} -> {ok}
//   {action:"cancel", id}                                     -> {ok}
//   {action:"dispatch"}   cabecera x-dispatch-secret          -> {sent, failed, removed}
//   {action:"selftest"}   cabecera x-dispatch-secret          -> comprueba el cifrado

import webpush from "npm:web-push@3.6.7";
import { createClient } from "npm:@supabase/supabase-js@2.45.4";

const db = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  { auth: { persistSession: false } },
);
const SUBJECT = Deno.env.get("VAPID_SUBJECT") || Deno.env.get("SUPABASE_URL")!;

// Solo se aceptan servicios de push conocidos (evita que la función llame a cualquier URL).
const PUSH_HOSTS = [
  /^fcm\.googleapis\.com$/,
  /^updates\.push\.services\.mozilla\.com$/,
  /^([a-z0-9-]+\.)*push\.apple\.com$/,
  /^([a-z0-9-]+\.)*notify\.windows\.com$/,
  /^([a-z0-9-]+\.)*push\.services\.mozilla\.com$/,
];
const B64URL = /^[A-Za-z0-9_-]+=*$/;
const ID = /^[A-Za-z0-9_-]{16,64}$/;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type, x-dispatch-secret, authorization, apikey, x-client-info",
};
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { ...CORS, "Content-Type": "application/json" } });

type Config = { vapid_public: string; vapid_private: string; dispatch_secret: string };
let config: Config | null = null;

async function getConfig(): Promise<Config> {
  if (config) return config;
  let { data } = await db.from("push_config").select("vapid_public, vapid_private, dispatch_secret").eq("id", 1).maybeSingle();
  if (!data) {
    const keys = webpush.generateVAPIDKeys();
    await db.from("push_config").upsert(
      { id: 1, vapid_public: keys.publicKey, vapid_private: keys.privateKey },
      { onConflict: "id", ignoreDuplicates: true },
    );
    ({ data } = await db.from("push_config").select("vapid_public, vapid_private, dispatch_secret").eq("id", 1).single());
  }
  config = data as Config;
  webpush.setVapidDetails(SUBJECT, config.vapid_public, config.vapid_private);
  return config;
}

function cleanText(v: unknown, max: number, fallback: string) {
  const s = String(v ?? "").replace(/[\u0000-\u001f]/g, " ").trim().slice(0, max);
  return s || fallback;
}

function validSubscription(s: any) {
  if (!s || typeof s !== "object") return null;
  let url: URL;
  try { url = new URL(String(s.endpoint)); } catch { return null; }
  if (url.protocol !== "https:" || !PUSH_HOSTS.some((r) => r.test(url.hostname))) return null;
  const p256dh = String(s.keys?.p256dh ?? ""), auth = String(s.keys?.auth ?? "");
  if (!B64URL.test(p256dh) || p256dh.length > 200 || !B64URL.test(auth) || auth.length > 100) return null;
  if (url.href.length > 1000) return null;
  return { endpoint: url.href, p256dh, auth };
}

async function secretOk(req: Request) {
  const c = await getConfig();
  const got = req.headers.get("x-dispatch-secret") || "";
  if (got.length !== c.dispatch_secret.length) return false;
  let diff = 0;
  for (let i = 0; i < got.length; i++) diff |= got.charCodeAt(i) ^ c.dispatch_secret.charCodeAt(i);
  return diff === 0;
}

async function dispatch() {
  await getConfig();
  const now = new Date();
  // Avisos con más de una hora sin enviar: el entreno ya no está en marcha.
  await db.from("rest_alarms").delete().lt("send_at", new Date(now.getTime() - 3600_000).toISOString());
  const { data: due } = await db.from("rest_alarms")
    .select("id, endpoint, p256dh, auth, title, body")
    .lte("send_at", new Date(now.getTime() + 500).toISOString())
    .limit(200);
  if (!due?.length) return { sent: 0, failed: 0, removed: 0 };
  // Se borran antes de enviar para que ningún aviso llegue dos veces.
  await db.from("rest_alarms").delete().in("id", due.map((d) => d.id));
  let sent = 0, failed = 0;
  await Promise.all(due.map(async (a) => {
    try {
      await webpush.sendNotification(
        { endpoint: a.endpoint, keys: { p256dh: a.p256dh, auth: a.auth } },
        JSON.stringify({ title: a.title, body: a.body, tag: "rest" }),
        { TTL: 120, urgency: "high" },
      );
      sent++;
    } catch (e) {
      failed++;
      console.error("push failed", (e as any)?.statusCode, (e as any)?.body);
    }
  }));
  return { sent, failed, removed: due.length };
}

async function selftest() {
  await getConfig();
  // Suscripción de prueba con claves reales generadas aquí: comprueba firma VAPID y cifrado.
  const pair = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"]);
  const raw = new Uint8Array(await crypto.subtle.exportKey("raw", pair.publicKey));
  const b64 = (u: Uint8Array) => btoa(String.fromCharCode(...u)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  const sub = { endpoint: "https://fcm.googleapis.com/fcm/send/selftest", keys: { p256dh: b64(raw), auth: b64(crypto.getRandomValues(new Uint8Array(16))) } };
  const det = webpush.generateRequestDetails(sub, JSON.stringify({ title: "Prueba", body: "Prueba" }), { TTL: 60 });
  return { ok: true, method: det.method, encoding: det.headers["Content-Encoding"], hasVapid: String(det.headers["Authorization"] || "").startsWith("vapid "), bodyBytes: det.body?.length ?? 0 };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);
  let body: any;
  try { body = await req.json(); } catch { return json({ error: "invalid_json" }, 400); }
  try {
    switch (body?.action) {
      case "key": {
        const c = await getConfig();
        return json({ publicKey: c.vapid_public });
      }
      case "schedule": {
        const id = String(body.id ?? "");
        const sub = validSubscription(body.subscription);
        const delay = Number(body.delay);
        if (!ID.test(id) || !sub || !isFinite(delay) || delay < 3 || delay > 900) return json({ error: "invalid_request" }, 400);
        // Un aviso pendiente por dispositivo: el nuevo sustituye al anterior.
        await db.from("rest_alarms").delete().eq("endpoint", sub.endpoint);
        await db.from("rest_alarms").delete().eq("id", id);
        const { error } = await db.from("rest_alarms").insert({
          id, ...sub,
          send_at: new Date(Date.now() + delay * 1000).toISOString(),
          title: cleanText(body.title, 80, "Descanso terminado"),
          body: cleanText(body.body, 200, "Empieza la siguiente serie."),
        });
        if (error) throw error;
        return json({ ok: true });
      }
      case "cancel": {
        const id = String(body.id ?? "");
        if (!ID.test(id)) return json({ error: "invalid_request" }, 400);
        await db.from("rest_alarms").delete().eq("id", id);
        return json({ ok: true });
      }
      case "dispatch":
        if (!(await secretOk(req))) return json({ error: "forbidden" }, 403);
        return json(await dispatch());
      case "selftest":
        if (!(await secretOk(req))) return json({ error: "forbidden" }, 403);
        return json(await selftest());
      default:
        return json({ error: "unknown_action" }, 400);
    }
  } catch (e) {
    console.error(e);
    return json({ error: "server_error" }, 500);
  }
});
