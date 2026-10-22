create extension if not exists pg_cron;
create extension if not exists pg_net;

-- Configuración del servidor de avisos: claves VAPID y secreto interno.
-- Las genera la propia función la primera vez; nunca salen del servidor.
create table public.push_config (
  id int primary key default 1 check (id = 1),
  vapid_public text not null,
  vapid_private text not null,
  dispatch_secret text not null default encode(extensions.gen_random_bytes(32), 'hex'),
  created_at timestamptz not null default now()
);

-- Avisos de fin de descanso pendientes (uno por dispositivo como máximo).
create table public.rest_alarms (
  id text primary key check (char_length(id) between 16 and 64),
  endpoint text not null unique check (char_length(endpoint) <= 1000),
  p256dh text not null check (char_length(p256dh) <= 200),
  auth text not null check (char_length(auth) <= 100),
  send_at timestamptz not null,
  title text not null check (char_length(title) <= 80),
  body text not null check (char_length(body) <= 200),
  created_at timestamptz not null default now()
);
create index rest_alarms_send_at_idx on public.rest_alarms (send_at);

-- Solo la función del servidor (rol de servicio) accede: RLS activado y sin políticas.
alter table public.push_config enable row level security;
alter table public.rest_alarms enable row level security;
revoke all on public.push_config, public.rest_alarms from anon, authenticated;
