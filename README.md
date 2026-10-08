# Serie

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
- Funciona sin conexión y se puede instalar en la pantalla de inicio.

## Estructura

```
.
├── index.html             Estructura de la página
├── css/styles.css         Estilos (tema claro y oscuro)
├── js/app.js              Toda la lógica de la app
├── manifest.webmanifest   Datos para instalarla como app
├── sw.js                  Service worker (modo sin conexión)
└── icons/                 Iconos de la app
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

## Tus datos

Todo se guarda en el almacenamiento local del navegador (`localStorage`) del dispositivo donde la usas. Esto implica:

- Cada navegador y cada dispositivo tiene sus propios datos; no se sincronizan solos.
- Borrar los datos del navegador borra tus entrenos.
- Para cambiar de móvil o hacer una copia de seguridad, usa **Ajustes → Exportar copia** y luego **Importar copia** en el otro dispositivo. Importar añade los datos a los que ya tienes, sin borrar nada.

### Pasar los datos desde la versión de Claude

Si has usado la app publicada en Claude, sus datos están guardados en tu cuenta de Claude, no en el navegador. Para traerlos: en la versión de Claude, **Ajustes → Exportar copia**; en esta versión, **Ajustes → Importar copia** con ese archivo.

## Actualizar la app

Después de cambiar cualquier archivo, sube la versión de `CACHE` en `sw.js` (por ejemplo, de `serie-v1` a `serie-v2`). Así los móviles que la tienen instalada descargan los archivos nuevos. Puede hacer falta cerrar y volver a abrir la app una vez.

## Notas técnicas

- `js/app.js` también funciona dentro de Claude: si detecta su entorno, guarda en la cuenta de Claude en lugar de en el navegador. Fuera de Claude usa siempre `localStorage`.
- La única dependencia externa es la tipografía Archivo de Google Fonts; sin conexión se usa la fuente del sistema.
