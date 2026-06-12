# Project Context: ASICS Golden Run Lima Static Landing

## Estado actual

Este proyecto es una copia estatica de la landing original de WordPress ubicada en:

- https://asicsgoldenrunlima.pe

La implementacion actual vive en:

- `/Users/orlando/Developer/Web/asicsgoldenrunlima`

El sitio se sirve localmente con Laravel Herd en:

- http://asicsgoldenrunlima.test

El repo remoto configurado es:

- `git@github.com:innovacoders/asicsgoldenrunlima-static-landing.git`

Rama actual:

- `main`

Commit inicial ya creado y pusheado:

- `6967844 Build static ASICS Golden Run landing`

Al momento de crear este documento, `main` trackea `origin/main`.

## Objetivo del proyecto

Clonar la landing de WordPress lo mas fielmente posible, pero sin WordPress, Divi, jQuery, React, Vue, Angular ni ningun framework de UI.

Stack elegido:

- HTML estatico semantico.
- Tailwind CSS compilado.
- JavaScript vanilla.
- Assets descargados y servidos localmente.

La meta es que el sitio sea simple, portable, responsive y facil de mantener.

## Estructura principal

Archivos importantes:

- `index.html`: landing completa.
- `src/input.css`: Tailwind source + componentes custom.
- `src/main.js`: JavaScript vanilla para menu, lightbox y animaciones.
- `dist/styles.css`: CSS compilado que usa el navegador.
- `tailwind.config.js`: colores, fuente y shadow custom.
- `package.json`: scripts de build/dev.
- `assets/images/`: imagenes locales descargadas del WordPress original.
- `assets/docs/reglamento-2026-v2.pdf`: PDF local del reglamento.

No versionar:

- `node_modules/` esta ignorado en `.gitignore`.

## Comandos utiles

Instalar dependencias:

```bash
npm install
```

Compilar Tailwind:

```bash
npm run build
```

Watch de Tailwind:

```bash
npm run watch
```

Servidor Vite opcional:

```bash
npm run dev
```

Nota: en esta maquina se usa principalmente Laravel Herd, asi que normalmente se prueba en:

```text
http://asicsgoldenrunlima.test
```

## Dependencias

Dependencias de desarrollo:

- `tailwindcss@3.4.17`
- `vite@6.0.7`

No se esta usando ninguna libreria JavaScript en runtime.

El JavaScript de `src/main.js` usa APIs nativas:

- `addEventListener`
- `IntersectionObserver`
- manipulacion simple de clases
- lightbox propio

## Decisiones visuales y tecnicas importantes

### Header

El header principal es `sticky`, no `fixed`.

Motivo: cuando era `fixed`, el menu podia tapar informacion importante del hero. Con `sticky`, el header ocupa su espacio real en el flujo del documento y sigue quedandose arriba al hacer scroll.

Detalles actuales:

- Barra azul `#011E62`.
- Logo blanco/dorado local.
- Burger responsive dorado `#E8CB7F`.
- Altura con aire vertical: `min-h-[82px]` y `py-4`.
- En desktop ancho, se muestra navegacion completa.
- En resoluciones menores a `xl`, se usa menu responsive.

### Hero

El hero usa imagenes locales:

- Desktop: `assets/images/hero-desktop.webp`
- Mobile: `assets/images/hero-mobile.webp`

La imagen completa del hero es clickeable y lleva a inscripcion:

- https://eventsv2.pacifictiming.com/store/261018_asics

### Banda de resultados

Banda dorada con texto:

- `¡Conoce los resultados de la edición 2025!`

Boton externo:

- https://finisherdata.com/resultados/asics_golden_run_lima_2025?id_event=536

### Seccion `#carrera`

Esta fue la zona mas delicada visualmente.

La columna derecha debe replicar el look de WordPress:

- Imagen gris de fondo completa.
- Tres bloques de color superpuestos a la imagen.
- Los bloques tienen separacion vertical.
- El borde izquierdo sobresale un poco de la imagen.
- El borde derecho queda dentro de la imagen.
- Los bloques no deben quedar debajo de la imagen.

Implementacion actual:

- La imagen es un `<img>` real: `assets/images/info-carrera.webp`.
- El stack de tarjetas usa `.race-info-cards`.
- Hay estilos custom en `src/input.css`.
- Tambien hay estilos inline criticos en `index.html` para evitar que cache viejo de CSS rompa la superposicion.

Importante: el link del CSS tiene cache-busting:

```html
<link rel="stylesheet" href="./dist/styles.css?v=20260611-0848" />
```

Esto se agrego porque en una prueba el navegador cargo HTML nuevo con CSS cacheado, y eso hizo que las tarjetas cayeran debajo de la imagen. Si se modifica `dist/styles.css`, conviene actualizar este querystring.

### Seccion `#circuitos`

Incluye:

- Label `Inscripciones`.
- Slogan `Sound Mind, Sound Body`.
- Mapas 21K, mapa 2026 y 10K.
- Hover swap en mapas 21K/10K.
- Lightbox custom para abrir el mapa 2026.
- Boton `Inscríbete Ahora`.

Assets:

- `assets/images/map-21k.webp`
- `assets/images/map-21k-hover.webp`
- `assets/images/map-2026.webp`
- `assets/images/map-10k.webp`
- `assets/images/map-10k-hover.webp`

### Seccion `#kit`

Incluye:

- `Entrega de Kit`
- fecha/horario/lugar `Por confirmar`
- lista del kit:
  - Camiseta
  - Gymsack
  - Dorsal
  - Otras sorpresas

### Seccion sponsors

Incluye logos locales:

- `assets/images/sponsor-asics.webp`
- `assets/images/sponsor-muni-magdalena.webp`
- `assets/images/sponsor-zm.webp`

### Footer

Incluye:

- Links placeholder `Facebook` e `Instagram` con `href="#"`
- Credito `Desarrollado por Innova Coders`
- Link externo: https://innovacoders.com

## Assets locales

Assets descargados desde el WordPress original y guardados localmente:

- `assets/images/logo-asics-golden.webp`
- `assets/images/favicon.webp`
- `assets/images/hero-desktop.webp`
- `assets/images/hero-mobile.webp`
- `assets/images/info-carrera.webp`
- `assets/images/map-21k.webp`
- `assets/images/map-21k-hover.webp`
- `assets/images/map-2026.webp`
- `assets/images/map-10k.webp`
- `assets/images/map-10k-hover.webp`
- `assets/images/sponsor-asics.webp`
- `assets/images/sponsor-muni-magdalena.webp`
- `assets/images/sponsor-zm.webp`
- `assets/docs/reglamento-2026-v2.pdf`

## Enlaces externos conservados

Resultados:

- https://finisherdata.com/resultados/asics_golden_run_lima_2025?id_event=536

Inscripcion:

- https://eventsv2.pacifictiming.com/store/261018_asics

Innova Coders:

- https://innovacoders.com

Reglamento:

- ahora apunta al PDF local `assets/docs/reglamento-2026-v2.pdf`

## Verificaciones realizadas durante la sesion

Se verifico:

- `npm run build` compila correctamente.
- Herd sirve el HTML, CSS, JS, imagenes y PDF con `200`.
- No quedan referencias a WordPress, Divi, jQuery, `wp-content` ni Google Tag Manager en los archivos del sitio.
- El header ya no tapa el hero.
- El menu responsive abre/cierra.
- El lightbox del mapa 2026 abre y cierra.
- La columna derecha de `#carrera` quedo superpuesta correctamente tras agregar cache-busting e inline styles criticos.
- `npm audit --omit=dev` reporto `0 vulnerabilities`.

## Notas de mantenimiento

- Despues de cambiar `src/input.css` o clases Tailwind en `index.html`, correr `npm run build`.
- Si se hacen cambios visuales y el navegador no los refleja, revisar cache del CSS y considerar actualizar el querystring en `index.html`.
- Evitar reintroducir WordPress, Divi, jQuery o dependencias runtime innecesarias.
- Mantener assets locales para que el sitio no dependa de `wp-content/uploads`.
- Si se cambian dimensiones o posicionamiento de `#carrera`, probar especialmente desktop y mobile, porque esa composicion es la mas sensible.

## Flujo recomendado para futuras sesiones

1. Revisar estado:

```bash
git status --short --branch
```

2. Hacer cambios en `index.html`, `src/input.css` o `src/main.js`.

3. Compilar:

```bash
npm run build
```

4. Probar en:

```text
http://asicsgoldenrunlima.test
```

5. Si todo esta bien:

```bash
git add .
git commit -m "Mensaje claro"
git push
```
