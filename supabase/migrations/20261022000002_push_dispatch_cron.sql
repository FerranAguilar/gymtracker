create schema if not exists private;
revoke all on schema private from public, anon, authenticated;

-- Llama a la función de envío solo si hay avisos vencidos (así casi no consume invocaciones).
-- Cambia la URL si despliegas en otro proyecto.
create or replace function private.dispatch_rest_alarms()
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if exists (select 1 from public.rest_alarms where send_at <= now() + interval '1 second') then
    perform net.http_post(
      url := 'https://tdtezlgausvwlnnjibuo.supabase.co/functions/v1/push',
      body := '{"action":"dispatch"}'::jsonb,
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'x-dispatch-secret', (select dispatch_secret from public.push_config where id = 1)
      ),
      timeout_milliseconds := 15000
    );
  end if;
end;
$$;
revoke all on function private.dispatch_rest_alarms() from public, anon, authenticated;

select cron.schedule('gymtracker-rest-alarms', '5 seconds', 'select private.dispatch_rest_alarms()');
