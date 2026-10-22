-- Limpieza nocturna (3:17 UTC) del historial de pg_cron de más de dos días.
-- La tarea de avisos corre cada 5 s y deja unas 17.000 filas al día en cron.job_run_details.
-- (Las respuestas de pg_net ya se borran solas a las pocas horas.)
select cron.schedule('gymtracker-cleanup', '17 3 * * *', $$
  delete from cron.job_run_details where end_time < now() - interval '2 days';
$$);
