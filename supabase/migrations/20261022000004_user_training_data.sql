-- Datos de entrenamiento de cada usuario. La app guarda primero en el dispositivo y sincroniza aquí.

-- Documentos de la app: ejercicios propios, rutinas y ajustes (un JSON por clave).
create table public.docs (
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  key text not null check (key in ('library', 'routines', 'settings')),
  data jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);

-- Entrenos guardados. Los borrados se marcan (deleted) para que se borren también en los demás dispositivos.
create table public.sessions (
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  id text not null check (char_length(id) between 1 and 64),
  date bigint not null,
  data jsonb not null,
  deleted boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, id)
);
create index sessions_user_updated_idx on public.sessions (user_id, updated_at);

-- updated_at lo pone siempre el servidor: sirve para descargar solo lo que ha cambiado.
create or replace function private.touch_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin
  new.updated_at := now();
  return new;
end;
$$;
create trigger docs_touch before insert or update on public.docs for each row execute function private.touch_updated_at();
create trigger sessions_touch before insert or update on public.sessions for each row execute function private.touch_updated_at();

-- Cada usuario solo ve y modifica sus propias filas.
alter table public.docs enable row level security;
alter table public.sessions enable row level security;

create policy "docs: leer los propios" on public.docs for select to authenticated using (user_id = (select auth.uid()));
create policy "docs: crear los propios" on public.docs for insert to authenticated with check (user_id = (select auth.uid()));
create policy "docs: cambiar los propios" on public.docs for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

create policy "sessions: leer los propios" on public.sessions for select to authenticated using (user_id = (select auth.uid()));
create policy "sessions: crear los propios" on public.sessions for insert to authenticated with check (user_id = (select auth.uid()));
create policy "sessions: cambiar los propios" on public.sessions for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

revoke all on public.docs, public.sessions from anon;
grant select, insert, update on public.docs, public.sessions to authenticated;
