# GymTracker

Cuaderno de gimnasio personal en forma de web app, pensado para usarse con el móvil mientras entrenas.

Es una web estática: HTML, CSS y JavaScript sin dependencias ni proceso de compilación. Los datos se guardan en el propio navegador, sin servidor ni cuentas.

## Funciones

- **Rutinas**: crea plantillas con ejercicios, series y repeticiones objetivo (admite rangos como `8-12`).
- **Entrenamiento serie a serie**: pulsa «Empezar ejercicio» para abrir una ventana grande con los kg y las repeticiones de cada serie. «Serie acabada» lanza el descanso, que se puede ajustar ±15 s, y la siguiente serie empieza sola al terminar.
- **Descanso por ejercicio**, editable desde la propia pantalla del entrenamiento.
- **Memoria por ejercicio**: cada ejercicio recuerda las series, kg, repeticiones y descanso de la última vez.
- **La serie 1 rellena las demás** al cambiar sus kg o repeticiones.
- **Cardio** con tiempo y distancia (km o metros) y cronómetro integrado.
- **Tonelaje acumulado** de la sesión en la barra inferior.
- **Calculadora de discos** para los ejercicios con barra olímpica.
- **Base de 227 ejercicios** en español, con nombre en inglés, músculo, material y explicación técnica con puntos de referencia.
- **Historial y progreso**: constancia de las últimas 12 semanas, series por grupo muscular, 1RM estimado (Epley), récords y ritmo en cardio.
- **Exportar e importar** una copia de seguridad en JSON.
- **Avisos del descanso**: pitidos en los 3 últimos segundos y al terminar, y notificación push cuando acaba el descanso aunque el móvil esté bloqueado.
- Funciona sin conexión y se puede instalar en la pantalla de inicio.

## Estructura

```
.
├── index.html             Estructura de la página
├── css/styles.css         Estilos (tema claro y oscuro)
├── js/app.js              Toda la lógica de la app
├── manifest.webmanifest   Datos para instalarla como app
├── sw.js                  Service worker (modo sin conexión y notificaciones)
├── icons/                 Iconos de la app
└── supabase/              Servidor de notificaciones push
    ├── config.toml
    ├── functions/push/    Función que programa, cancela y envía los avisos
    └── migrations/        Tablas y tarea programada
```

## Probarla en tu ordenador

El service worker solo funciona servido por HTTP, no abriendo el archivo directamente. Desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
```

y abre <http://localhost:8000>.

## Publicarla gratis con GitHub Pages

1. Sube estos archivos a un repositorio de GitHub.
2. En el repositorio, ve a **Settings → Pages**.
3. En **Source**, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`. Guarda.
4. En un par de minutos estará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

También sirve cualquier hosting estático (Netlify, Cloudflare Pages, Vercel…), sin configuración adicional.

## Instalarla en el móvil

- **iPhone (Safari)**: botón Compartir → **Añadir a pantalla de inicio**.
- **Android (Chrome)**: menú ⋮ → **Instalar aplicación** o **Añadir a pantalla de inicio**.

Se abre a pantalla completa, como una app, y funciona sin cobertura.

## Avisos del descanso

**Sonido.** Pitidos en los 3 últimos segundos del descanso y uno doble al terminar. Se activa o desactiva en **Ajustes → Avisos del descanso**. Suena con la app en pantalla (la app mantiene la pantalla encendida durante el entreno). En iPhone no suena con el modo silencio activado.

**Notificaciones push.** Avisan al acabar el descanso aunque el móvil esté bloqueado o estés en otra app. Se activan en **Ajustes → Avisos del descanso → Activar notificaciones**, y allí mismo puedes enviar una prueba.

- **Android y ordenador** (Chrome, Edge, Firefox): funcionan desde el navegador o con la app instalada.
- **iPhone y iPad** (iOS 16.4 o posterior): solo con la app añadida a la pantalla de inicio y abierta desde allí.
- Necesitan HTTPS (GitHub Pages, Netlify, etc.) o `localhost`.

### Cómo funciona el servidor

```
App ──(empieza el descanso)──▶ función push ──▶ tabla rest_alarms
App ──(sigue antes / +15 s)──▶ función push (cancela o reprograma)
pg_cron cada 5 s ──(si hay avisos vencidos)──▶ función push ──▶ servicio push del navegador ──▶ notificación
```

- Las claves VAPID y el secreto interno los genera el propio servidor la primera vez y se guardan en la tabla `push_config`, que solo puede leer la función.
- La app no necesita ninguna clave: solo llama a la URL de la función (`PUSH_URL` en `js/app.js`).
- Si la app sigue en pantalla, cancela el aviso 8 segundos antes del final y suena ella misma, para no avisar dos veces. Si pasa a segundo plano en esos últimos segundos, lo vuelve a programar.
- La función solo acepta direcciones de servicios push conocidos (Google, Mozilla, Apple y Microsoft) y un aviso pendiente por dispositivo.
- La precisión es de unos 5 segundos, por el intervalo de la tarea programada.

### Desplegarlo en otro proyecto de Supabase

1. Crea el proyecto y aplica las migraciones de `supabase/migrations/` (cambia la URL de la función en la segunda).
2. Despliega la función: `supabase functions deploy push --no-verify-jwt`.
3. Cambia `PUSH_URL` en `js/app.js` por la URL de tu función.

## Tus datos

Todo se guarda en el almacenamiento local del navegador (`localStorage`) del dispositivo donde la usas. Esto implica:

- Cada navegador y cada dispositivo tiene sus propios datos; no se sincronizan solos.
- Borrar los datos del navegador borra tus entrenos.
- Para cambiar de móvil o hacer una copia de seguridad, usa **Ajustes → Exportar copia** y luego **Importar copia** en el otro dispositivo. Importar añade los datos a los que ya tienes, sin borrar nada.

### Pasar los datos desde la versión de Claude

Si has usado la app publicada en Claude, sus datos están guardados en tu cuenta de Claude, no en el navegador. Para traerlos: en la versión de Claude, **Ajustes → Exportar copia**; en esta versión, **Ajustes → Importar copia** con ese archivo.

## Actualizar la app

Después de cambiar cualquier archivo, sube la versión de `CACHE` en `sw.js` (por ejemplo, de `gymtracker-v3` a `gymtracker-v4`). Así los móviles que la tienen instalada descargan los archivos nuevos. Puede hacer falta cerrar y volver a abrir la app una vez.

## Notas técnicas

- `js/app.js` también funciona dentro de Claude: si detecta su entorno, guarda en la cuenta de Claude en lugar de en el navegador. Fuera de Claude usa siempre `localStorage`.
- Las copias de seguridad antiguas (las exportadas cuando la app se llamaba «Serie») se pueden importar sin problema.
- Las claves internas de `localStorage` empiezan por `serie:` por compatibilidad con los datos ya guardados; no las cambies.
- La única dependencia externa es la tipografía Archivo de Google Fonts; sin conexión se usa la fuente del sistema.
