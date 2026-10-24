# AGENTS.md — Reglas del proyecto "Nostalgia: Press Start"

Eres el desarrollador de una web académica interactiva para un trabajo universitario
(USFQ, Taller de Investigación). Todo el contenido, los datos y el diseño están en
`BRIEF.md`. Léelo completo antes de escribir código y vuelve a él ante cualquier duda.

## Reglas que no se rompen

1. **El contenido académico es intocable.** Copia los textos de `BRIEF.md` (sección 5)
   tal cual. No resumas, no reescribas, no "mejores" la redacción, no inventes citas,
   cifras, autores ni páginas. Si algo falta, deja un comentario `<!-- FALTA: ... -->`
   y avísame; no lo rellenes.
2. **Los datos salen de un solo archivo:** `data/juegos.json` (sección 6 de `BRIEF.md`).
   Tablas, gráficos, promedios y totales se calculan en JavaScript a partir de ese
   archivo. Nunca escribas un número a mano en el HTML.
3. **Sin build ni frameworks.** HTML + CSS + JavaScript puro (ES modules). Nada de
   React, Vite, npm ni Tailwind. La web tiene que funcionar abriendo `index.html`
   desde GitHub Pages sin compilar nada.
4. **Sin librerías externas**, salvo Google Fonts (sección 7.3). Los gráficos se dibujan
   con SVG generado por JS.
5. **Accesible y legible primero, efecto después.** La fuente pixelada solo va en
   títulos cortos. Todo el texto largo va en la fuente de lectura. Contraste AA mínimo.
   Todo debe funcionar con teclado y con `prefers-reduced-motion`.
6. **Debe funcionar en celular** (360 px de ancho) sin scroll horizontal.
7. **Modo lectura obligatorio:** un botón muestra todo el contenido como documento
   lineal e imprimible (para que el profesor pueda leerlo o guardarlo en PDF).
8. **Trabaja por fases** (sección 9 de `BRIEF.md`). Al terminar cada fase: dime qué
   hiciste, qué archivos tocaste y qué debo revisar. No avances a la siguiente fase
   sin que yo lo confirme.
9. **Commits pequeños** con mensajes en español que digan qué cambió.
10. Idioma de la web: **español**. Comentarios del código: español.

## Libertad creativa (dónde sí puedes proponer)

Lo fijo es el **contenido** (textos, citas, datos y cifras). En **diseño,
interactividad y experiencia** tienes libertad para hacerlo lo mejor posible:

- Las secciones 7 y 8 de `BRIEF.md` son la base mínima, no un techo. Puedes mejorar
  layouts, animaciones, transiciones, microinteracciones, la forma de mostrar gráficos
  o el recorrido de los niveles, si eso hace los hallazgos más claros o la experiencia
  más memorable.
- Puedes proponer interactivos nuevos que ayuden a entender la investigación (por
  ejemplo, comparar dos juegos lado a lado o una línea de tiempo de la muestra), siempre
  que usen solo los datos de `juegos.json` y los textos de `BRIEF.md`.
- Todo debe seguir el tema: nostalgia, videojuegos de los 90 y un trabajo académico
  serio. Lo retro va en la interfaz, la lectura sigue siendo clara.
- Cuando cambies algo importante del BRIEF (paleta, tipografía, estructura de niveles
  o un componente), primero explícame la idea en 2 o 3 líneas y por qué es mejor, y
  espera mi visto bueno. Los ajustes pequeños de diseño hazlos directamente.
- Ninguna mejora puede romper las reglas 1 a 7: contenido intacto, datos desde
  `juegos.json`, sin frameworks, accesible, responsive y con modo lectura.

## Estructura de archivos

```
/index.html
/css/estilos.css
/js/main.js          (arranque, navegación, modo lectura)
/js/datos.js         (carga y cálculos sobre juegos.json)
/js/graficos.js      (gráficos SVG)
/js/ficha.js         (tabla interactiva y fichas de juego)
/js/test.js          (simulador del Test de Nostalgia)
/data/juegos.json
/assets/             (íconos SVG propios; nada con copyright)
/README.md
```

## Prohibido

- Logos, carátulas, capturas o personajes de los juegos analizados (copyright).
  Usa formas abstractas, píxeles y colores propios.
- Texto de relleno tipo "lorem ipsum" en la versión final.
- Cambiar la clasificación de un juego o una respuesta Sí/No sin que yo lo pida.
