# BRIEF.md — "Nostalgia: Press Start"
## Web académica interactiva sobre la nostalgia en videojuegos

> **Para Cursor:** este archivo es la única fuente de verdad del proyecto. Las reglas de
> trabajo están en `AGENTS.md`. El contenido de la sección 5 y los datos de la sección 6
> se copian exactamente; tu trabajo es la estructura, el diseño y la interactividad.

---

## 0. Índice

1. Contexto y entrega
2. Concepto de la experiencia
3. Mapa de niveles (arquitectura)
4. Público, tono y criterios de evaluación
5. **Contenido completo de cada nivel** (texto final, con citas)
6. **Datos** (`data/juegos.json`)
7. Diseño visual
8. Componentes interactivos
9. Plan de trabajo por fases (con prompts)
10. Publicación en GitHub Pages
11. Checklist de calidad antes de entregar
12. Pendientes del grupo (no son tarea de Cursor)

---

## 1. Contexto y entrega

- **Curso:** Taller de Investigación, Universidad San Francisco de Quito (USFQ).
  Profesor: Juan Pablo Viteri.
- **Grupo:** Justin Peñafiel, Naomi Armas y Joel Castillo.
- **Investigación:** *La nostalgia como recurso de desarrollo y estrategia comercial en
  videojuegos contemporáneos.* Análisis de contenido cuantitativo de 12 videojuegos.
- **Formato de entrega elegido:** proyecto multimedia interactivo (web), publicado en
  GitHub Pages. El profesor pidió que la entrega use "ampliamente herramientas de diseño
  visual o audiovisual para narrar y exponer con claridad los hallazgos".
- **Qué tiene que lograr la web:** que el profesor, sin nadie al lado, entienda en orden
  qué investigamos, por qué, cómo, qué encontramos y qué significa, con todo citado.

---

## 2. Concepto de la experiencia

**La investigación se recorre como un videojuego de los 90.** La pantalla de inicio es
un "PRESS START". Cada parte del trabajo es un **nivel** en un mapa de mundo. El
visitante avanza nivel por nivel; al completar uno, se desbloquea el siguiente (pero
todos se pueden abrir directamente desde el mapa: nunca se bloquea el contenido de
verdad, el "desbloqueo" es solo visual).

Principios:

- **Metáfora, no disfraz.** La estética retro refuerza el tema (la nostalgia), pero el
  texto se lee como un artículo académico: fuente legible, buen interlineado, citas.
- **Cada nivel = una idea.** Arriba, un titular que dice la conclusión del nivel en una
  frase. Debajo, el desarrollo.
- **Los datos se juegan.** La ficha de los 12 juegos se puede filtrar y abrir; el
  visitante puede aplicar el Test de Nostalgia a cualquier juego que conozca.
- **Barra de progreso tipo XP** arriba: muestra cuántos niveles se visitaron.
- **Modo lectura** (botón fijo "📄 Leer como documento"): muestra todo de corrido,
  sin animaciones, listo para imprimir o guardar como PDF.

---

## 3. Mapa de niveles

| # | Nombre en la web | Contenido (sección 5) |
|---|---|---|
| 0 | PRESS START | Portada, título, autores, botón empezar |
| 1 | Mundo 1 · El problema | Introducción, pregunta e importancia |
| 2 | Mundo 2 · ¿Qué es la nostalgia? | Marco teórico I: conceptos |
| 3 | Mundo 3 · Nostalgia y gamers | Marco teórico II: qué representa para los jugadores |
| 4 | Mundo 4 · El negocio de la nostalgia | Marco teórico III: estrategia comercial |
| 5 | Mundo 5 · Método | Diseño, muestra, unidad de análisis, codificación |
| 6 | Mundo 6 · El Test de Nostalgia | Las 5 preguntas, justificación, clasificación + simulador |
| 7 | Mundo 7 · Resultados | Ficha interactiva, totales, gráficos |
| 8 | Mundo 8 · Hipótesis | H1, H2, H3 con sus datos |
| 9 | Mundo 9 · Discusión | Interpretación a la luz de la teoría |
| 10 | Mundo 10 · Límites | Limitaciones y estudios futuros |
| 11 | GAME OVER · Conclusión | Conclusión final y "créditos" |
| 12 | Créditos | Referencias APA, fuentes de datos, uso de IA |

---

## 4. Público, tono y criterios de evaluación

- **Lector principal:** el profesor. Lee con calma y evalúa rigor, claridad y diseño.
- **Tono:** académico y claro. Nada de jerga gamer sin explicar. Los guiños retro van en
  la interfaz (botones, transiciones, íconos), no en el texto académico.
- **Lo que se evalúa (y la web debe hacer evidente):**
  1. Pregunta, objetivo e hipótesis claros.
  2. Marco teórico fundamentado y citado.
  3. Método replicable (cualquiera podría repetir el test).
  4. Resultados en tablas y gráficos legibles.
  5. Discusión que conecte resultados con teoría.
  6. Limitaciones honestas.
  7. Uso fuerte del diseño visual para comunicar.

---

## 5. Contenido completo de cada nivel

> Cursor: copia estos textos tal cual. Los títulos con `###` son el titular grande del
> nivel. Las citas van entre paréntesis en formato APA 7 con página cuando la hay.
> Los bloques marcados **[Dato destacado]** se muestran como tarjeta grande con el
> número en fuente pixelada. Los marcados **[Cita]** van como cita en bloque.

---

### NIVEL 0 · PRESS START

**Título:** La nostalgia como recurso de desarrollo y estrategia comercial en videojuegos contemporáneos

**Subtítulo:** Un análisis de contenido de los 12 videojuegos más vendidos de dos décadas

**Autores:** Justin Peñafiel · Naomi Armas · Joel Castillo
**Curso:** Taller de Investigación · Universidad San Francisco de Quito · 2026

**Botón:** ▶ PRESS START

**Texto pequeño bajo el botón:** Usa las flechas o haz clic para avanzar. ¿Prefieres leerlo de corrido? Activa "Leer como documento".

---

### NIVEL 1 · El problema
### La industria mira cada vez más hacia atrás. Queríamos medir cuánto.

En los últimos años, la industria del videojuego ha llenado su calendario de remakes, remasters y juegos con estética de otras épocas. Solo desde 2012 se han publicado unos 200 remakes o remasters, y para 2025 se anunciaron alrededor de 30 más (MTM, 2025, p. 4, con datos de Kotaku y GameSpot). Al mismo tiempo, estudios independientes llenan las tiendas de juegos con gráficos pixelados que imitan las consolas de 8 y 16 bits (Bosman, 2023, p. 27).

Este fenómeno no es solo una moda estética. Para las empresas, volver a lo conocido reduce el riesgo económico de producciones cada vez más caras (MTM, 2025, p. 6). Para los jugadores, puede ser una forma de volver a un lugar querido o de conocer una época que no vivieron (Addeo y Guerra, 2026, p. 35).

**Pregunta de investigación:**
¿En qué medida y de qué forma los videojuegos más vendidos de las décadas de 2000 y 2010 utilizan la nostalgia como recurso de diseño y de estrategia comercial?

**Objetivo general:**
Medir la presencia y el tipo de recursos nostálgicos en los videojuegos más vendidos de dos décadas, comparando entre épocas (2000 frente a 2010) y entre tipos de producción (AAA frente a independiente).

**Objetivos específicos:**
1. Construir un instrumento de medición cerrado y replicable (el Test de Nostalgia) a partir de la literatura.
2. Aplicarlo a una muestra estratificada de 12 videojuegos.
3. Comparar los resultados por década y por tipo de producción.
4. Interpretar los resultados a la luz de la teoría sobre nostalgia y retrogaming.

**¿Por qué importa?**
Entender cómo se usa la nostalgia ayuda a leer críticamente una industria que, según varios autores, convierte el pasado en producto (Addeo y Guerra, 2026, p. 34) y que necesita rehacer sus obras para que sigan vivas en la memoria colectiva (Buñuel Fanconi, 2025, p. 258). También sirve a quienes diseñan juegos, como nosotros, para usar la nostalgia de forma consciente y no solo repetitiva.

---

### NIVEL 2 · ¿Qué es la nostalgia?
### La nostalgia no está en el juego: se activa en quien juega.

**2.1 Una emoción social, no solo privada**

La nostalgia suele entenderse como un recuerdo agridulce pero positivo de tiempos pasados (Sedikides et al., 2015, citado en Bowman et al., 2023). El sociólogo Fred Davis sostiene que no es una emoción privada u ocasional, sino un fenómeno colectivo ligado a la identidad, a los cambios culturales y a las etapas de la vida; además, señala que la nostalgia nace en los medios, circula por los medios y muchas veces tiene como objeto a los propios productos mediáticos (Davis, 2023, citado en Addeo y Guerra, 2026, p. 33).

**2.2 Nostalgia personal y nostalgia histórica**

La literatura distingue dos formas (Natterer, 2014, citado en Bowman et al., 2023):
- **Nostalgia personal:** por experiencias que uno mismo vivió.
- **Nostalgia histórica:** por una época anterior a la propia vida.

La segunda explica por qué jugadores jóvenes disfrutan juegos retro que nunca jugaron. Addeo y Guerra (2026, p. 35) la llaman **anemoia**: "una forma de nostalgia por un tiempo no vivido directamente, sino reconstruido a través de mediaciones culturales y digitales" (traducción propia). Bowman et al. (2023) proponen además la **nostalgia vicaria**: la nostalgia de un jugador puede asociarse con las experiencias que imagina que vivieron otros, como sus padres o hermanos mayores.

**[Dato destacado]** Dos formas de recordar: **memoria directa** (lo viví) y **anemoia** (no lo viví, pero lo siento como propio).

**2.3 Tres niveles de profundidad (tipología de Davis)**

Addeo y Guerra (2026, pp. 34 y 39) aplican la tipología de Davis a los videojuegos:

| Tipo | Qué hace el juego | Ejemplo de la literatura |
|---|---|---|
| **Simple** | Evoca el pasado "tal como era", de forma idealizada y afectuosa | Las salas arcade de la serie Yakuza |
| **Reflexiva** | Se relaciona de forma consciente o crítica con la memoria del medio | Crash Bandicoot dentro de Uncharted 4 |
| **Interpretada** | Convierte a la propia nostalgia en tema de reflexión | Arcade Paradise |

**2.4 El romanticismo del videojuego**

Bosman (2023, p. 29) agrupa estos fenómenos bajo el concepto de **romanticismo del videojuego**: la idealización de un pasado que se presume tecnológicamente inferior pero cultural, social o espiritualmente superior al presente. Distingue cuatro modos en que los videojuegos se vuelven objeto de esa idealización (pp. 33–37):

1. **Retro gaming:** "la apropiación de la estética y/o las mecánicas de videojuegos antiguos en juegos modernos" (p. 33, traducción propia). Puede ser **estético** (pixel art, sonido chiptune) o **mecánico** (vidas limitadas, alta dificultad, muerte permanente) (pp. 33–34).
2. **Remakes y reboots:** nuevas versiones de juegos anteriores (p. 34).
3. **Nostalgia de juego en sentido estricto:** el regreso de jugadores mayores a los juegos de su infancia (p. 35).
4. **Vintage play:** la revaloración de juegos antiguos por jugadores demasiado jóvenes para recordarlos (p. 36).

**[Cita]** "Un juego no es intrínsecamente nostálgico o vintage, sino que se experimenta como tal." (Bosman, 2023, p. 40, traducción propia)

**2.5 Lo que esto significa para nuestro estudio**

Esta idea es clave para nuestro método: no podemos medir si un juego *hace sentir* nostalgia (eso ocurre en cada jugador), pero sí podemos medir si el juego **contiene recursos diseñados para activarla**: estética retro, mecánicas retro, elementos de su propia saga, formatos clásicos o el hecho de ser una nueva versión. Eso es lo que mide nuestro test.

---

### NIVEL 3 · Nostalgia y gamers
### Para los jugadores, la nostalgia es identidad, compañía y descubrimiento.

**3.1 Una máquina del tiempo jugable**

A diferencia de un libro o una película, el videojuego no solo muestra el pasado: deja volver a recorrerlo. Bosman (2023, p. 30) recoge la idea de Fenty de que los videojuegos ofrecen "la seducción de un pasado perfecto que se puede volver a jugar". Buñuel Fanconi (2025, p. 267) lo resume así:

**[Cita]** "No estamos mirando una fotografía de un lugar en el que estuvimos, sino que estamos volviendo a recorrer ese lugar, pero reconstruido." (Buñuel Fanconi, 2025, p. 267)

**3.2 Identidad y continuidad**

Volver a los juegos de etapas importantes de la vida refuerza el sentido de pertenencia, estabilidad y coherencia de la identidad; según Davis, la nostalgia es un mecanismo para construir y renegociar la identidad en los momentos de transición, como el paso de la adolescencia a la adultez (Addeo y Guerra, 2026, p. 33). Los objetos culturales del pasado funcionan como "anclas simbólicas" (p. 33).

**3.3 La nostalgia se juega con otros**

En el estudio de Bowman et al. (2023), 105 jóvenes universitarios jugaron 10 minutos *Double Dragon II*, un beat 'em up de los 90, y luego describieron lo que sintieron. Del análisis temático surgieron ocho temas agrupados en tres bloques: los retrogames como experiencias únicas, los retrogames y las personas importantes, y los retrogames y el yo. Los participantes recordaron a familiares con quienes jugaban e incluso pensaron en las consolas de "cuando mi mamá era joven, antes de que yo naciera" (traducción propia). Es decir, la nostalgia aparece unida a vínculos sociales y familiares.

El informe de MTM (2025) muestra lo mismo desde el mercado:

**[Dato destacado] 80 %** de los jugadores encuestados está de acuerdo en que los remakes y remasters "son reconfortantes y nostálgicos" (MTM, 2025, p. 18).

**[Dato destacado] 71 %** los ve como una buena forma de compartir sus juegos favoritos con quienes no los jugaron (MTM, 2025, p. 19).

**3.4 La nostalgia también es descubrimiento**

No toda la nostalgia viene de la memoria. En la misma encuesta, el 85 % de los jugadores ha jugado un remake o remaster sin haber jugado el original, y el 67 % dice que los usa para descubrir juegos antiguos por primera vez (MTM, 2025, p. 20). Para la Generación Z, el pasado del videojuego "no se recupera simplemente, sino que se encuentra, se filtra y se reinterpreta" desde la sensibilidad actual (Addeo y Guerra, 2026, p. 35, traducción propia).

**3.5 Pero no todos la aplauden**

La nostalgia también genera tensiones. Los jugadores se dividen sobre si un remake debe cambiar la historia o la jugabilidad: 35 % cree que mejoran al cambiar, 30 % que empeoran y 35 % está de acuerdo con ambas (MTM, 2025, p. 24). Y varios entrevistados temen que tantos relanzamientos frenen la creatividad (MTM, 2025, p. 14). Además, la nostalgia es selectiva: el jugador quiere volver a los lugares que recuerda, pero no a los controles incómodos que olvidó (Buñuel Fanconi, 2025, p. 259).

---

### NIVEL 4 · El negocio de la nostalgia
### Para la industria, la nostalgia es una apuesta de bajo riesgo.

**4.1 Por qué a las empresas les conviene**

Los juegos son cada vez más caros y una propiedad intelectual (IP) nueva puede poner en riesgo cientos de millones de dólares; frente a eso, los remakes y remasters ofrecen estabilidad financiera porque se apoyan en marcas con un público ya probado (MTM, 2025, p. 6). Hay casos en los que la nueva versión vende más que el original: según MTM (2025, p. 5), *Crash Bandicoot N. Sane Trilogy* (2017) llegó a 20 millones de unidades para 2024 y *The Elder Scrolls IV: Oblivion Remastered* (2025) vendió en un mes más que el original en 15 meses.

**4.2 Qué compra realmente el jugador**

Chari et al. (2026) estudiaron qué despierta la nostalgia por los juegos retro y cómo influye en la compra. Según su resumen, la nostalgia evocada por juegos retro se relaciona con la necesidad de competencia, las ganas de escapar de la realidad, la estabilidad social, el aburrimiento y la sensación de discontinuidad del yo. La diversión y la nostalgia aumentan la satisfacción con la experiencia, sobre todo cuando el juego se percibe como **auténtico**, y esa satisfacción influye en la compra de juegos retro.

**4.3 La nostalgia como producto**

Para Addeo y Guerra (2026, p. 34), la nostalgia "se convierte en una mercancía", y la industria del entretenimiento actúa como un verdadero "vendedor de nostalgia" (Morreale, 2009, citado en Addeo y Guerra, 2026, p. 34). En su análisis de 22 juegos que incluyen un videojuego retro jugable adentro, observan que predominan los que reutilizan juegos de la propia empresa, lo que interpretan como el uso de la nostalgia "como recurso para la identidad de marca" (p. 41, traducción propia).

**4.4 El remake como necesidad cultural**

Buñuel Fanconi (2025) va más allá del dinero. Sostiene que, en la "sociedad del espectáculo interactivo", un juego que no se rehace pierde impacto y desaparece de la memoria colectiva; por eso el remake es una demanda del mercado, pero también "una necesidad antropológica" para que las comunidades de jugadores tengan relatos compartidos (pp. 258 y 261–262). Para que funcione, el remake debe actualizar lo visual pero sin perder su conexión con el original: "todos los elementos míticos del juego original tienen que aparecer" (p. 261).

**4.5 Dos caminos para usar la nostalgia**

De la literatura se desprenden dos estrategias distintas, que guían nuestras hipótesis:

- **Volver a una obra concreta:** remakes, remasters y secuelas que reutilizan personajes y lugares de su propia saga. Tienen una relación intertextual **explícita** con un juego específico (Bosman, 2023, p. 40).
- **Volver a una época o un género:** juegos nuevos que imitan la estética o las mecánicas de otra era. Tienen una relación intertextual **implícita**, "no con un juego específico, sino con un género de juegos" (Bosman, 2023, p. 40, traducción propia). Buñuel Fanconi (2025, p. 264) asocia este camino sobre todo a los juegos independientes de aspecto retro, como *Stardew Valley* o *Undertale*.

---

### NIVEL 5 · Método
### Medimos 12 juegos con las mismas 5 preguntas.

**5.1 Tipo de estudio**

Análisis de contenido cuantitativo. Cada juego se observa y se codifica con un instrumento cerrado de preguntas de Sí o No, para que cualquier persona pueda repetir la medición y llegar a resultados comparables.

**5.2 Unidad de análisis**

Cada videojuego, en su contenido base. No se analizan expansiones, contenido descargable ni modos en línea separados (por ejemplo, *GTA Online* no forma parte del análisis de *GTA V*).

**5.3 Muestra**

Muestreo intencional y estratificado en una matriz de 2 × 2: tipo de producción (AAA o independiente) por década de lanzamiento (2000–2009 o 2010–2019). En cada grupo se eligieron los 3 juegos más vendidos según ventas acumuladas, excluyendo los que se vendían incluidos con una consola, porque esas ventas no reflejan una elección del jugador. Total: **n = 12**.

> Cursor: aquí va el componente **Matriz de muestra** (sección 8.2) con los 12 juegos y sus ventas, generado desde `juegos.json`.

**Fuentes de ventas:** Wikipedia, *List of best-selling video games*, y VGChartz, consultados en octubre de 2026. Las ventas de *World of Goo* son una estimación (más de 2 millones).

**Criterios de clasificación del tipo de producción:**
- **AAA:** desarrollado o publicado por una gran empresa con presupuesto de producción alto.
- **Independiente:** desarrollado por un estudio sin respaldo financiero de una gran editora al momento de su lanzamiento. Casos límite: *Minecraft* se clasifica como independiente porque Mojang era un estudio independiente cuando salió en 2011; *Garry's Mod* se clasifica como independiente porque nació como un mod creado por un desarrollador individual, aunque luego lo publicó Valve.

**5.4 Codificación**

Siguiendo el procedimiento de Bowman et al. (2023), en el que un primer investigador codifica y un segundo revisa de forma independiente, un integrante del grupo aplicó el test a los 12 juegos y un segundo integrante verifica cada respuesta. Las respuestas en las que hubo dudas se marcan con un asterisco (*) hasta que el segundo codificador las confirme. La meta es un acuerdo mínimo del 80 % entre codificadores.

**5.5 Variables**

| Variable | Tipo | Valores |
|---|---|---|
| Década | Independiente | 2000s / 2010s |
| Tipo de producción | Independiente | AAA / Indie |
| P1 a P5 | Dependientes | Sí / No |
| Puntos | Dependiente | 0 a 4 (suma de P1–P4) |
| Resultado | Dependiente | Relanzamiento / Alta / Moderada / Nula |
| Tipo de nostalgia | Descriptiva | Simple / Reflexiva / Interpretada (Davis) |
| Orientación de la memoria | Descriptiva | Memoria directa / Anemoia |
| Pertenece a saga | Control | IP nueva / Saga existente (no suma puntos) |

---

### NIVEL 6 · El Test de Nostalgia
### Cinco preguntas de Sí o No, cada una con respaldo teórico.

Nuestro instrumento se inspira en el formato del test de Bechdel: pocas preguntas cerradas, fáciles de comprobar mirando la obra. Cada pregunta mide un aspecto distinto, para que una respuesta no dependa de otra.

> Cursor: cada pregunta es una "tarjeta de poder" (sección 8.3) que se voltea para mostrar el criterio, el ejemplo y la fuente.

**P1. ¿Tiene estética retro a propósito?** *(lo visual y lo sonoro)*
- **Se marca Sí cuando:** sus gráficos o su sonido imitan una generación anterior (pixel art, sprites de 8 o 16 bits, música chiptune) aunque la tecnología de su época permitía más.
- **Ejemplo de Sí:** *Terraria*.
- **Fuente:** retro gaming estético (Bosman, 2023, p. 33).

**P2. ¿Tiene mecánicas retro?** *(las reglas)*
- **Se marca Sí cuando:** tiene vidas limitadas, *game over*, muerte permanente o pérdida de progreso al morir.
- **Ejemplo de Sí:** las vidas de *New Super Mario Bros.*; el modo Hardcore de *Minecraft*.
- **Fuente:** retro gaming mecánico (Bosman, 2023, pp. 33–34); la necesidad de competencia como detonante de la nostalgia retro (Chari et al., 2026).

**P3. ¿Reutiliza elementos icónicos de su propia saga?** *(el contenido)*
- **Se marca Sí cuando:** trae de entregas anteriores de su saga un personaje, escenario, circuito, tema musical u objeto reconocible. Si no hay saga previa, es No. Los huevos de pascua sueltos no cuentan.
- **Ejemplo de Sí:** los circuitos retro de *Mario Kart*; John Marston en *Red Dead Redemption 2*.
- **Fuente:** los elementos míticos del original deben aparecer (Buñuel Fanconi, 2025, p. 261); los jugadores piden no cambiar a los personajes y conservar el estilo artístico y la música originales, "porque son centrales para los recuerdos" (MTM, 2025, p. 31, traducción propia).

**P4. ¿Su formato es uno de los formatos clásicos?** *(el tipo de juego)*
- **Se marca Sí cuando:** su formato principal está en esta lista cerrada: plataformas 2D con desplazamiento lateral, beat 'em up, shooter arcade por niveles, aventura de apuntar y hacer clic, o rol con vista cenital estilo 16 bits.
- **Ejemplo de Sí:** *Castle Crashers* (beat 'em up).
- **Fuente:** relación intertextual con un género antiguo (Bosman, 2023, p. 40); estilos retro que reinterpretan los códigos de décadas pasadas (Addeo y Guerra, 2026, p. 34).

**P5. ¿Es una nueva versión de un juego anterior?** *(remake, remaster, reedición o versión mejorada)*
- **Se marca Sí cuando:** se vende como remake, remaster, reedición o versión mejorada de un juego que ya existía.
- **Ejemplo de Sí:** *Mario Kart 8 Deluxe*.
- **Fuente:** definición de remake y remaster (MTM, 2025, p. 11); el remake como forma de mantener vivo un juego (Buñuel Fanconi, 2025, p. 258).

**Cómo se clasifica**

> Cursor: diagrama de flujo animado (sección 8.4).

1. Si **P5 = Sí** → el juego es **Relanzamiento** (una estrategia distinta, se reporta aparte).
2. Si **P5 = No** → se suman los Sí de P1 a P4:
   - **3 o 4 puntos:** nostalgia **alta**.
   - **1 o 2 puntos:** nostalgia **moderada**.
   - **0 puntos:** nostalgia **nula** (el juego apuesta por la innovación).
3. Que el juego pertenezca a una saga se registra aparte y **no suma puntos**.

**Por qué cambiamos el test original**

En la versión inicial, dos preguntas dependían de la saga (pertenecer a una saga y reutilizar sus elementos), así que un juego AAA de franquicia sumaba dos puntos casi automáticamente. En la versión final, la pertenencia a una saga se registra como variable de control y cada pregunta mide un aspecto distinto: estética, mecánicas, contenido, formato y tipo de producto.

> Cursor: después del texto, el **simulador "Hazle el test a tu juego"** (sección 8.5).

---

### NIVEL 7 · Resultados
### 7 de los 12 juegos usan nostalgia, pero solo 2 la usan con fuerza.

> Cursor: aquí van, en este orden: (1) cuatro tarjetas de totales, (2) la ficha
> interactiva de 12 juegos con filtros, (3) gráfico de barras de puntos por juego,
> (4) gráfico "qué pregunta suma cada grupo". Todo calculado desde `juegos.json`.

**Texto que acompaña a los totales:**
De los 12 juegos analizados, **2** tienen nostalgia alta (*New Super Mario Bros.* y *Terraria*), **4** tienen nostalgia moderada (*Mario Kart Wii*, *Castle Crashers*, *Red Dead Redemption 2* y *Minecraft*), **5** no usan recursos nostálgicos (*The Sims*, *Garry's Mod*, *World of Goo*, *GTA V* y *Human: Fall Flat*) y **1** es un relanzamiento (*Mario Kart 8 Deluxe*).

**Texto que acompaña al gráfico "qué pregunta suma cada grupo":**
Los dos grupos llegan a la nostalgia por caminos distintos. En los juegos AAA, casi todos los puntos vienen de la P3 (reutilizar elementos de su saga): 4 de los 6 AAA la cumplen, mientras que ningún indie lo hace. En los juegos independientes, los puntos vienen de la estética (P1), las mecánicas (P2) y el formato clásico (P4); ningún AAA tiene estética retro.

**Texto sobre el tipo de nostalgia y la orientación:**
Los 7 juegos con recursos nostálgicos usan nostalgia **simple**: evocan el pasado de forma afectuosa, sin reflexionar sobre él. En cuanto a la memoria, los 4 AAA con nostalgia apelan a la **memoria directa** (recuerdos de entregas anteriores de su propia saga), mientras que los 3 indie con nostalgia apelan a la **anemoia** (una estética de época que el jugador no necesita haber vivido).

---

### NIVEL 8 · Hipótesis
### Las tendencias van en la dirección esperada, pero son pequeñas.

> Cursor: tres "jefes" (sección 8.7). Cada uno muestra la hipótesis, el dato y el
> veredicto. Los números se calculan desde `juegos.json`.

**H1 · Tiempo.** *Los juegos de la década de 2010 usan más recursos nostálgicos que los de la década de 2000.*
- **Dato:** promedio de puntos 2000s = **1,0**; 2010s = **1,2** (1,17).
- **Veredicto: Tendencia a favor, débil.** La diferencia va en la dirección esperada, pero es de apenas 0,17 puntos en una muestra de 6 juegos por década.

**H2 · Tipo de producción.** *Los juegos AAA y los independientes usan la nostalgia de forma distinta: los AAA mediante elementos de su saga y los independientes mediante estética, mecánicas y formato.*
- **Dato:** promedio AAA = **1,0**; indie = **1,2** (1,17). P3 la cumplen 4 de 6 AAA y 0 de 6 indie; P1 la cumplen 0 de 6 AAA y 2 de 6 indie.
- **Veredicto: Se cumple en el "cómo", no en el "cuánto".** La cantidad es casi igual, pero el camino es claramente distinto.

**H3 · Tipo de nostalgia.** *La nostalgia que usan los juegos más vendidos es mayoritariamente simple.*
- **Dato:** **7 de 7** juegos con recursos nostálgicos usan nostalgia simple.
- **Veredicto: Se cumple.**

**Nota:** con 12 juegos, estos resultados son descriptivos y no permiten generalizar a toda la industria.

---

### NIVEL 9 · Discusión
### La nostalgia vende, pero no es obligatoria para vender.

**9.1 La nostalgia como complemento, no como base**

Más de la mitad de los juegos más vendidos usa algún recurso nostálgico (7 de 12), pero solo 2 lo hacen con fuerza. Y entre los que no usan ninguno están algunos de los juegos más vendidos de la historia, como *GTA V* o *The Sims*. Esto sugiere que, entre los grandes éxitos, la nostalgia funciona más como un recurso de apoyo que como la base del producto. Es coherente con lo que encuentran Chari et al. (2026): la nostalgia por sí sola no explica la satisfacción; pesa junto con la diversión y con que el juego se perciba como auténtico.

**9.2 Dos estrategias que confirman la teoría**

El hallazgo más claro es que los AAA y los indie llegan a la nostalgia por caminos distintos, y esa diferencia coincide con la distinción de Bosman (2023, p. 40):

- **Los AAA** usan una relación intertextual **explícita** con sus propios juegos anteriores: circuitos de entregas pasadas, personajes de la primera parte, la nueva versión de un éxito. Es la nostalgia que se apoya en la marca. Coincide con el argumento de MTM (2025, p. 6) sobre el bajo riesgo de explotar una IP con público probado y con la observación de Addeo y Guerra (2026, p. 41) sobre la nostalgia como recurso de identidad de marca. También explica por qué estos juegos apelan a la memoria directa: necesitan que el jugador recuerde la saga.
- **Los indie** usan una relación **implícita** con un género o una época: pixel art, vidas limitadas, formatos clásicos. No necesitan una saga propia, y por eso pueden hablarle tanto a quien vivió esa época como a quien no (anemoia). Es lo que Buñuel Fanconi (2025, p. 264) llama la relación "crítica" con el pasado propia de muchos juegos independientes.

En otras palabras: **los AAA venden el recuerdo de un juego; los indie venden el recuerdo de una época.**

**9.3 Más nostalgia con el tiempo, pero poca diferencia**

La pequeña subida de la década de 2000 a la de 2010 es coherente con la explicación generacional de Bosman (2023, p. 27): si los primeros jugadores empezaron a jugar de niños a finales de los 70 y principios de los 80, recién hacia finales de los 2000 y principios de los 2010 tuvieron edad para sentir nostalgia por los juegos de su infancia. Sin embargo, la diferencia que encontramos es pequeña y no permite afirmar que la tendencia sea real fuera de nuestra muestra.

**9.4 Una nostalgia que no se cuestiona**

Que los 7 juegos con nostalgia usen nostalgia simple coincide con lo que Addeo y Guerra (2026, p. 42) observan en sus casos: predomina la evocación afectuosa e idealizada, y la nostalgia reflexiva o interpretada es poco común. Una explicación posible es que los juegos más vendidos buscan una respuesta emocional inmediata y amplia, no una reflexión sobre el pasado. Los juegos que convierten a la nostalgia en tema, como *Arcade Paradise*, quedan fuera de las listas de los más vendidos.

**9.5 Pocos relanzamientos entre los más vendidos**

Solo 1 de los 12 juegos es un relanzamiento (*Mario Kart 8 Deluxe*). Esto no contradice el auge de los remakes que describe MTM (2025, p. 4): nuestra muestra mide los juegos más vendidos de toda la historia hasta 2019, y la ola de remakes de gran presupuesto es más reciente (por ejemplo, *Resident Evil 4* en 2023, citado por Buñuel Fanconi, 2025, p. 260). Un estudio que incluya la década de 2020 probablemente encontraría más relanzamientos.

---

### NIVEL 10 · Límites
### Lo que este estudio no puede decir.

1. **Muestra pequeña e intencional (n = 12).** Los resultados describen estos 12 juegos y no se pueden generalizar a toda la industria.
2. **Medimos el juego, no al jugador.** Como señala Bosman (2023, p. 40), un juego no es nostálgico en sí mismo, sino que se experimenta como tal. Nuestro test detecta recursos diseñados para activar la nostalgia, pero no mide si los jugadores la sienten.
3. **Codificación en proceso de verificación.** La primera codificación se hizo a partir del conocimiento de los juegos y de fuentes publicadas, no jugando cada título durante el estudio. Algunas respuestas siguen pendientes de confirmación por el segundo codificador (marcadas con *).
4. **Ventaja estructural de la P3.** Solo un juego con saga previa puede marcar Sí en la P3, lo que favorece a los AAA en esa pregunta. Por eso analizamos los caminos por separado y no solo el promedio.
5. **Relanzamientos dentro de los promedios.** *Mario Kart 8 Deluxe* se clasifica como Relanzamiento, pero sus puntos de P1 a P4 se incluyeron en los promedios de década y tipo de producción.
6. **Casos límite de clasificación.** *Minecraft* y *Garry's Mod* se clasificaron como independientes por su origen (ver nivel 5), una decisión discutible. Las ventas de *World of Goo* son una estimación.
7. **El test mide presencia, no intensidad.** Un juego con un solo guiño y otro construido entero sobre ese recurso pueden recibir el mismo Sí.

**Estudios futuros:** ampliar la muestra e incluir la década de 2020; combinar este análisis de contenido con una encuesta a jugadores para medir si la nostalgia detectada se siente; y repetir la codificación con dos codificadores independientes desde el inicio.

---

### NIVEL 11 · GAME OVER · Conclusión
### La nostalgia es una herramienta, y cada tipo de estudio la usa a su manera.

La nostalgia está presente en más de la mitad de los videojuegos más vendidos de las décadas de 2000 y 2010, pero casi siempre como recurso complementario y de forma simple, sin reflexionar sobre el pasado. Su uso aumenta levemente de una década a otra.

El hallazgo central es que no hay una sola forma de usarla. Las grandes empresas la usan como estrategia de marca: vuelven a sus propios personajes, circuitos y éxitos, un camino de bajo riesgo que apela a la memoria directa de sus jugadores. Los estudios independientes la usan como recurso de diseño: toman la estética, las reglas y los formatos de una época, y con eso pueden hablarle incluso a jugadores que nunca la vivieron.

Como escribe Buñuel Fanconi (2025, p. 267), quizá se trate, sencillamente, de "recordar jugando y jugar a recordar".

**Botón final:** ▶ CONTINUE? → vuelve al mapa · 📄 Leer como documento · ↓ Ver referencias

---

### NIVEL 12 · Créditos

**Equipo:** Justin Peñafiel · Naomi Armas · Joel Castillo
**Curso:** Taller de Investigación · Prof. Juan Pablo Viteri · USFQ · 2026

**Referencias (APA 7)**

Addeo, F., & Guerra, A. (2026). The double screen in retrogaming: Memory device between anemoia and memory trigger. *Národopisná revue, 36*(1), 32–44. https://doi.org/10.62800/NR.2026.1.03

Bosman, F. G. (2023). Video game romanticism: On retro gaming, remakes, reboots, game nostalgia, and bad games. *Journal for Religion, Film and Media, 9*(1), 25–44. https://doi.org/10.25364/05.9:2023.1.3

Bowman, N. D., Condis, M., Yoshimura, K., & Bohaty, E. (2023, octubre). *Vicarious nostalgia? Playing retrogames fosters an appreciation for gaming history* [Ponencia]. AoIR2023: The 24th Annual Conference of the Association of Internet Researchers, Filadelfia, PA, Estados Unidos. http://spir.aoir.org

Buñuel Fanconi, D. (2025). Nostalgia y pervivencia de relatos míticos en la sociedad del espectáculo interactivo. La relación del videojuego con su pasado mediante remakes. *Área Abierta. Revista de Comunicación Audiovisual y Publicitaria, 25*(2), 257–268. https://doi.org/10.5209/arab.97041

Chari, S., Papagiannidis, S., Marikyan, D., & Davlembayeva, D. (2026). Back to the time when the grass was greener (and Buster Bunny was fluffier): A study of retro-game-evoked nostalgia and its role in gamers' behaviour. *British Journal of Management, 37*(1). https://doi.org/10.1111/1467-8551.70015

MTM. (2025). *Remakes & remasters 2025: Is the past the future of gaming?* [Informe]. https://wearemtm.com

**Fuentes citadas de forma secundaria:** Davis (2023), Morreale (2009) y Natterer (2014), citados en Addeo y Guerra (2026) o en Bowman et al. (2023); Fenty (2008) y Sedikides et al. (2015), citados en Bosman (2023) y Bowman et al. (2023).

**Fuentes de datos de ventas:** Wikipedia, *List of best-selling video games*; VGChartz. Consultados en octubre de 2026.

**Uso de inteligencia artificial:** Este proyecto utilizó herramientas de IA como apoyo para la revisión de redacción, la organización del contenido y el desarrollo del código de la web. La selección de la muestra, el diseño del test, la codificación y su verificación, y las conclusiones son responsabilidad del grupo.

**Aviso:** Los nombres de videojuegos se mencionan con fines académicos. Esta web no usa imágenes, logotipos ni música de los juegos analizados.

---

## 6. Datos — `data/juegos.json`

> Cursor: crea este archivo exactamente así. `verificar: true` muestra un asterisco en
> la celda correspondiente. Todos los cálculos salen de aquí.

```json
{
  "actualizado": "2026-10-24",
  "nota_ventas": "Ventas acumuladas en millones de unidades. Fuentes: Wikipedia (List of best-selling video games) y VGChartz, octubre 2026. World of Goo es una estimación.",
  "preguntas": {
    "P1": "¿Tiene estética retro a propósito?",
    "P2": "¿Tiene mecánicas retro?",
    "P3": "¿Reutiliza elementos icónicos de su propia saga?",
    "P4": "¿Su formato es uno de los formatos clásicos?",
    "P5": "¿Es una nueva versión de un juego anterior?"
  },
  "juegos": [
    {
      "id": "the-sims", "nombre": "The Sims", "anio": 2000,
      "decada": "2000s", "tipo": "AAA", "ventas_m": 50, "ventas_estimada": false,
      "saga": "IP nueva",
      "respuestas": {"P1": false, "P2": false, "P3": false, "P4": false, "P5": false},
      "verificar": [],
      "resultado": "Nula", "tipo_nostalgia": null, "orientacion": null,
      "evidencia": "Juego original sin rasgos retro."
    },
    {
      "id": "mario-kart-wii", "nombre": "Mario Kart Wii", "anio": 2008,
      "decada": "2000s", "tipo": "AAA", "ventas_m": 37.4, "ventas_estimada": false,
      "saga": "Saga existente",
      "respuestas": {"P1": false, "P2": false, "P3": true, "P4": false, "P5": false},
      "verificar": [],
      "resultado": "Moderada", "tipo_nostalgia": "Simple", "orientacion": "Memoria directa",
      "evidencia": "Incluye circuitos retro de entregas anteriores de Mario Kart."
    },
    {
      "id": "nsmb", "nombre": "New Super Mario Bros.", "anio": 2006,
      "decada": "2000s", "tipo": "AAA", "ventas_m": 30.8, "ventas_estimada": false,
      "saga": "Saga existente",
      "respuestas": {"P1": false, "P2": true, "P3": true, "P4": true, "P5": false},
      "verificar": [],
      "resultado": "Alta", "tipo_nostalgia": "Simple", "orientacion": "Memoria directa",
      "evidencia": "Vidas y game over; Flor de Fuego y Estrella de Super Mario Bros.; plataformas 2D con desplazamiento lateral."
    },
    {
      "id": "garrys-mod", "nombre": "Garry's Mod", "anio": 2006,
      "decada": "2000s", "tipo": "Indie", "ventas_m": 25.6, "ventas_estimada": false,
      "saga": "IP nueva",
      "respuestas": {"P1": false, "P2": false, "P3": false, "P4": false, "P5": false},
      "verificar": [],
      "resultado": "Nula", "tipo_nostalgia": null, "orientacion": null,
      "evidencia": "Sandbox de física sin recursos retro."
    },
    {
      "id": "castle-crashers", "nombre": "Castle Crashers", "anio": 2008,
      "decada": "2000s", "tipo": "Indie", "ventas_m": 20, "ventas_estimada": false,
      "saga": "IP nueva",
      "respuestas": {"P1": false, "P2": true, "P3": false, "P4": true, "P5": false},
      "verificar": ["P2"],
      "resultado": "Moderada", "tipo_nostalgia": "Simple", "orientacion": "Anemoia",
      "evidencia": "Beat 'em up cooperativo para cuatro, descrito como homenaje a los beat 'em ups de arcade (Hardcore Gaming 101)."
    },
    {
      "id": "world-of-goo", "nombre": "World of Goo", "anio": 2008,
      "decada": "2000s", "tipo": "Indie", "ventas_m": 2, "ventas_estimada": true,
      "saga": "IP nueva",
      "respuestas": {"P1": false, "P2": false, "P3": false, "P4": false, "P5": false},
      "verificar": [],
      "resultado": "Nula", "tipo_nostalgia": null, "orientacion": null,
      "evidencia": "Puzzle de física original sin recursos retro."
    },
    {
      "id": "gta-v", "nombre": "Grand Theft Auto V", "anio": 2013,
      "decada": "2010s", "tipo": "AAA", "ventas_m": 230, "ventas_estimada": false,
      "saga": "Saga existente",
      "respuestas": {"P1": false, "P2": false, "P3": false, "P4": false, "P5": false},
      "verificar": ["P3"],
      "resultado": "Nula", "tipo_nostalgia": null, "orientacion": null,
      "evidencia": "Solo huevos de pascua puntuales; no reutiliza elementos icónicos de forma central (sin contar GTA Online)."
    },
    {
      "id": "rdr2", "nombre": "Red Dead Redemption 2", "anio": 2018,
      "decada": "2010s", "tipo": "AAA", "ventas_m": 87, "ventas_estimada": false,
      "saga": "Saga existente",
      "respuestas": {"P1": false, "P2": false, "P3": true, "P4": false, "P5": false},
      "verificar": [],
      "resultado": "Moderada", "tipo_nostalgia": "Simple", "orientacion": "Memoria directa",
      "evidencia": "Personajes de Red Dead Redemption (John Marston, Bill Williamson, Javier Escuella)."
    },
    {
      "id": "mk8d", "nombre": "Mario Kart 8 Deluxe", "anio": 2017,
      "decada": "2010s", "tipo": "AAA", "ventas_m": 80, "ventas_estimada": false,
      "saga": "Saga existente",
      "respuestas": {"P1": false, "P2": false, "P3": true, "P4": false, "P5": true},
      "verificar": [],
      "resultado": "Relanzamiento", "tipo_nostalgia": "Simple", "orientacion": "Memoria directa",
      "evidencia": "Versión mejorada de Mario Kart 8 (2014); incluye circuitos retro."
    },
    {
      "id": "minecraft", "nombre": "Minecraft", "anio": 2011,
      "decada": "2010s", "tipo": "Indie", "ventas_m": 425, "ventas_estimada": false,
      "saga": "IP nueva",
      "respuestas": {"P1": true, "P2": true, "P3": false, "P4": false, "P5": false},
      "verificar": [],
      "resultado": "Moderada", "tipo_nostalgia": "Simple", "orientacion": "Anemoia",
      "evidencia": "Texturas pixeladas por decisión de diseño (Addeo y Guerra, 2026, p. 35, lo citan como juego de estilo retro); modo Hardcore."
    },
    {
      "id": "terraria", "nombre": "Terraria", "anio": 2011,
      "decada": "2010s", "tipo": "Indie", "ventas_m": 70, "ventas_estimada": false,
      "saga": "IP nueva",
      "respuestas": {"P1": true, "P2": true, "P3": false, "P4": true, "P5": false},
      "verificar": [],
      "resultado": "Alta", "tipo_nostalgia": "Simple", "orientacion": "Anemoia",
      "evidencia": "Pixel art tipo 16 bits; modo Hardcore; plataformas 2D con desplazamiento lateral."
    },
    {
      "id": "human-fall-flat", "nombre": "Human: Fall Flat", "anio": 2016,
      "decada": "2010s", "tipo": "Indie", "ventas_m": 58, "ventas_estimada": false,
      "saga": "IP nueva",
      "respuestas": {"P1": false, "P2": false, "P3": false, "P4": false, "P5": false},
      "verificar": [],
      "resultado": "Nula", "tipo_nostalgia": null, "orientacion": null,
      "evidencia": "Física y estilo visual propios, sin recursos retro."
    }
  ]
}
```

### 6.1 Cálculos que debe hacer `js/datos.js`

- `puntos(juego)` = número de `true` entre P1, P2, P3 y P4 (P5 no suma).
- `clasificar(juego)` = "Relanzamiento" si P5; si no, Alta (3–4), Moderada (1–2), Nula (0).
  **Comprobación:** el resultado calculado debe coincidir con el campo `resultado` de los
  12 juegos. Si no coincide, muestra un error en consola.
- `promedio(grupo)` = media de `puntos` (incluye relanzamientos; ver límite 5).
  Mostrar con una cifra decimal y coma decimal (formato es-EC): 1,0 y 1,2.
- `conteoPorPregunta(grupo)` = cuántos juegos del grupo tienen Sí en cada pregunta.
- `totales()` = cuántos juegos hay en cada resultado.

**Valores esperados (para verificar que el código está bien):**

| Cálculo | Valor |
|---|---|
| Promedio 2000s | 1,0 (6/6) |
| Promedio 2010s | 1,2 (7/6 = 1,17) |
| Promedio AAA | 1,0 (6/6) |
| Promedio Indie | 1,2 (7/6 = 1,17) |
| Totales | Alta 2 · Moderada 4 · Nula 5 · Relanzamiento 1 |
| Sí por pregunta — AAA | P1 0 · P2 1 · P3 4 · P4 1 · P5 1 |
| Sí por pregunta — Indie | P1 2 · P2 3 · P3 0 · P4 2 · P5 0 |
| Juegos con nostalgia | 7 (todos tipo Simple) |

---

## 7. Diseño visual

### 7.1 Dirección de arte

**"Consola de los 90 vista con ojos de hoy."** Fondo oscuro tipo pantalla CRT, acentos de
color saturados como los de un menú de 16 bits, bordes pixelados en tarjetas y botones,
y texto de lectura limpio y moderno. Debe sentirse como entrar a un juego, pero leerse
como una revista académica bien diseñada.

### 7.2 Paleta (definir como variables CSS en `:root`)

| Token | Hex | Uso |
|---|---|---|
| `--fondo` | `#0E0B1F` | Fondo general (azul noche) |
| `--superficie` | `#1A1535` | Tarjetas y paneles |
| `--superficie-2` | `#251E4A` | Tarjetas elevadas, hover |
| `--texto` | `#F2EFFF` | Texto principal |
| `--texto-suave` | `#B9B2D9` | Texto secundario |
| `--acento` | `#FFCC33` | Botones, titulares, XP (amarillo moneda) |
| `--aaa` | `#4FA3FF` | Todo lo AAA (azul) |
| `--indie` | `#3DDC97` | Todo lo indie (verde) |
| `--alta` | `#FF5C8A` | Nostalgia alta |
| `--moderada` | `#FFA94D` | Nostalgia moderada |
| `--nula` | `#6C6890` | Nostalgia nula |
| `--relanzamiento` | `#B07CFF` | Relanzamiento |

Los colores de AAA/Indie y de los cuatro resultados se usan **igual en toda la web**
(tablas, gráficos, filtros, leyendas). Nunca se usa solo el color para dar información:
siempre va acompañado de texto o ícono.

### 7.3 Tipografía

- **Títulos cortos, números grandes y botones:** `Press Start 2P` (Google Fonts).
  Máximo ~40 caracteres por bloque. Tamaño mínimo 14 px.
- **Texto de lectura:** `IBM Plex Sans` (Google Fonts), 18 px, interlineado 1,65,
  ancho máximo de línea 68 caracteres.
- **Datos y tablas:** `IBM Plex Mono`.

### 7.4 Detalles retro (sutiles)

- Líneas de escaneo CRT muy suaves sobre el fondo (opacidad ≤ 6 %), desactivadas en
  modo lectura y con `prefers-reduced-motion`.
- Bordes de tarjeta con esquinas "pixeladas" (`clip-path` en escalones).
- Barra XP arriba con bloques que se llenan.
- Transición entre niveles: barrido tipo "cambio de pantalla" de 300 ms.
- Sonidos de 8 bits: **opcionales, apagados por defecto**, con un botón 🔈. Generados con
  Web Audio API (osciladores), sin archivos externos.
- Íconos: dibujados en SVG con cuadrícula de píxeles (moneda, corazón, mando, estrella).
  Nada que copie personajes o logos reales.

### 7.5 Responsive

- Escritorio: mapa de mundo horizontal; contenido centrado a 760 px.
- Celular (< 700 px): mapa en lista vertical; tablas con scroll interno propio o
  convertidas en tarjetas; nada de scroll horizontal de la página.

---

## 8. Componentes interactivos

### 8.1 Mapa de mundo y navegación

- Nodos conectados por un camino punteado, uno por nivel (13 nodos, 0 a 12).
- Estado de cada nodo: no visitado, actual, visitado (✓).
- Navegación: clic en nodo, botones ◀ ▶, teclas ← →, y `#nivel-3` en la URL
  (para que el profesor pueda volver a un punto exacto).
- El progreso visitado se guarda en `localStorage` (envuelto en try/catch; si falla,
  la web funciona igual).

### 8.2 Matriz de muestra (nivel 5)

Cuadrícula 2 × 2 (columnas: 2000s, 2010s; filas: AAA, Indie). En cada celda, los 3 juegos
como "cartuchos" con nombre, año y ventas. Las ventas estimadas llevan "≈" y una nota.
Debajo, un gráfico de barras horizontales de ventas (escala logarítmica o con aviso,
porque Minecraft (425 M) aplasta a World of Goo (2 M)). Recomendado: escala logarítmica
con etiqueta clara "escala logarítmica".

### 8.3 Tarjetas de poder (nivel 6)

Una tarjeta por pregunta. Frente: "P1" en pixel y la pregunta. Al hacer clic o Enter,
se voltea y muestra "Se marca Sí cuando", "Ejemplo de Sí" y "Fuente". Con
`prefers-reduced-motion`, se expande sin girar.

### 8.4 Diagrama de clasificación (nivel 6)

Diagrama de flujo en SVG: Juego → ¿P5? → Sí → Relanzamiento / No → suma P1–P4 →
3–4 Alta · 1–2 Moderada · 0 Nula. Se anima paso a paso al entrar en pantalla.

### 8.5 Simulador "Hazle el test a tu juego" (nivel 6)

- Campo opcional para escribir el nombre de un juego.
- Cinco interruptores Sí/No (P1–P5) con el criterio visible debajo de cada uno.
- Resultado en vivo con el color y nombre de la clasificación, y explicación
  ("Tu juego suma 2 puntos: estética y mecánicas retro → nostalgia moderada").
- Botón "Comparar con la muestra": muestra qué juegos de los 12 tienen el mismo resultado.
- No guarda datos de nadie.

### 8.6 Ficha interactiva y gráficos (nivel 7)

1. **Tarjetas de totales:** 4 tarjetas grandes (Alta 2, Moderada 4, Nula 5,
   Relanzamiento 1), cada una con los nombres de los juegos.
2. **Ficha:** tabla con columnas Juego · Grupo · P1 · P2 · P3 · P4 · P5 · Puntos ·
   Resultado. Sí = ■ con texto "Sí"; No = □ con texto "No"; pendiente = asterisco y
   tooltip "Pendiente de verificación por el segundo codificador".
   Filtros: Todos / AAA / Indie / 2000s / 2010s. Ordenar por puntos o ventas.
   Clic en una fila abre la **ficha del juego** (panel): todos los datos + evidencia +
   tipo de nostalgia + orientación + saga.
3. **Gráfico de puntos por juego:** barras verticales de 0 a 4, coloreadas por
   resultado, agrupadas por los cuatro grupos de la muestra.
4. **Gráfico "qué pregunta suma cada grupo":** barras agrupadas P1–P4 (y P5 aparte),
   AAA en azul e Indie en verde, valores del 0 al 6. Es el gráfico más importante de la
   web: debe verse grande y con el texto del nivel 7 al lado.

Todos los gráficos: SVG accesible (`role="img"`, `<title>`, `<desc>`), etiquetas de
valor visibles en cada barra, y una tabla equivalente oculta para lectores de pantalla.

### 8.7 Jefes de hipótesis (nivel 8)

Tres tarjetas tipo "pelea de jefe": nombre de la hipótesis, enunciado, "barra de vida"
que compara los dos valores (p. ej. 1,0 vs 1,2), y el veredicto como sello:
"TENDENCIA DÉBIL", "SE CUMPLE EN EL CÓMO", "SE CUMPLE". Los valores salen de `datos.js`.

### 8.8 Modo lectura

Botón fijo arriba a la derecha. Al activarlo: oculta mapa, XP, animaciones y efectos;
muestra los 13 niveles uno tras otro como documento; gráficos estáticos; tablas
completas; estilos de impresión (`@media print`) con fondo blanco, texto negro,
numeración de secciones y URLs de las referencias visibles.

---

## 9. Plan de trabajo por fases (prompts para Cursor)

> Justin: pega cada prompt en el chat de Cursor (modo Agent), uno a la vez. Revisa el
> resultado en el navegador antes de pasar al siguiente.

**Fase 1 — Esqueleto**
```
Lee AGENTS.md y BRIEF.md completos. Crea la estructura de archivos de AGENTS.md,
el index.html con los 13 niveles (solo títulos y textos de la sección 5, sin diseño
todavía), data/juegos.json exactamente como la sección 6, y js/datos.js con los
cálculos de la sección 6.1. Al final, abre la consola y comprueba que los valores
calculados coinciden con la tabla "Valores esperados". Dime el resultado.
```

**Fase 2 — Diseño base**
```
Aplica la sección 7 de BRIEF.md: variables de color, tipografías, layout responsive,
detalles retro sutiles. Sin interactivos todavía. Prioriza legibilidad del texto largo.
Muéstrame cómo se ve en escritorio y en 360 px de ancho.
```

**Fase 3 — Navegación y modo lectura**
```
Implementa la sección 8.1 (mapa, XP, teclado, #nivel-N en la URL) y la 8.8 (modo
lectura con estilos de impresión). Comprueba que todo el contenido es accesible en
modo lectura y que la página se imprime bien.
```

**Fase 4 — Test de Nostalgia**
```
Implementa las secciones 8.3 (tarjetas), 8.4 (diagrama) y 8.5 (simulador).
El simulador usa la misma función clasificar() de datos.js.
```

**Fase 5 — Resultados e hipótesis**
```
Implementa 8.2 (matriz de muestra), 8.6 (totales, ficha, gráficos) y 8.7 (jefes).
Todo calculado desde juegos.json. Verifica cada número contra la tabla de valores
esperados de la sección 6.1 y dime si alguno no coincide.
```

**Fase 6 — Pulido y revisión**
```
Revisa la web completa contra la checklist de la sección 11 de BRIEF.md y dime
punto por punto qué cumple y qué no. Corrige lo que no cumpla. Agrega README.md
con: qué es el proyecto, autores, cómo verlo en línea y cómo correrlo localmente.
```

**Si algo sale mal:** describe el problema con una captura y pide "arregla solo esto
sin tocar nada más". Si Cursor cambia textos académicos, pídele que los restaure
exactamente desde BRIEF.md.

---

## 10. Publicación en GitHub Pages

1. Repositorio público en GitHub, por ejemplo `nostalgia-press-start`.
2. Subir todos los archivos a la rama `main` (el `index.html` debe estar en la raíz).
3. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch → Branch: `main` / `(root)` → Save.**
4. En 1–3 minutos la web queda en
   `https://USUARIO.github.io/nostalgia-press-start/`.
5. Rutas siempre **relativas** (`css/estilos.css`, no `/css/estilos.css`), porque la web
   vive en una subcarpeta.
6. Probar el link en una ventana de incógnito y en el celular antes de entregarlo.

---

## 11. Checklist de calidad antes de entregar

**Contenido**
- [ ] Los textos de la sección 5 están completos y sin cambios.
- [ ] Toda cita lleva autor, año y página (cuando existe).
- [ ] Las 6 referencias aparecen en APA 7, con DOI o URL.
- [ ] No hay ningún número escrito a mano: todo sale de `juegos.json`.
- [ ] Los valores calculados coinciden con la tabla de la sección 6.1.
- [ ] Las celdas pendientes muestran asterisco y explicación.

**Diseño y uso**
- [ ] Se entiende el recorrido sin instrucciones.
- [ ] Texto largo en fuente legible, 18 px, contraste AA.
- [ ] Funciona con teclado (Tab, Enter, flechas) y tiene foco visible.
- [ ] Funciona en celular sin scroll horizontal.
- [ ] `prefers-reduced-motion` desactiva animaciones.
- [ ] Modo lectura muestra todo y se imprime bien.
- [ ] Sin imágenes, logos ni música con copyright.

**Técnico**
- [ ] Sin errores en la consola.
- [ ] Funciona en GitHub Pages (rutas relativas).
- [ ] Carga rápido (sin librerías pesadas).
- [ ] README.md completo.

---

## 12. Pendientes del grupo (no son tarea de Cursor)

1. **Confirmar con el profesor** que se puede entregar un link de GitHub Pages (o un
   .zip) en la plataforma.
2. **Segundo codificador:**
   - **GTA V · P3** (pendiente): revisar si reutiliza de forma central personajes,
     lugares o elementos icónicos de entregas anteriores (por ejemplo, la ciudad de
     Los Santos, que ya aparecía en *GTA: San Andreas*). Si es Sí, GTA V pasa a 1 punto
     (Moderada) y cambian los totales y los promedios de AAA y de 2010s.
   - **Castle Crashers · P2** (pendiente): la definición de P2 es "vidas limitadas,
     *game over*, muerte permanente o pérdida de progreso al morir". La fuente
     consultada (Hardcore Gaming 101) confirma que es un homenaje a los beat 'em ups
     de arcade, lo que respalda la P4, pero **no confirma por sí sola la P2**. Hay que
     comprobar si el juego tiene *game over* o pérdida de progreso al morir. Si es No,
     Castle Crashers baja a 1 punto (sigue en Moderada) y los promedios de 2000s e
     indie bajan a 0,8 y 1,0.
   - **Minecraft · P1:** confirmada con Addeo y Guerra (2026, p. 35), que lo citan como
     juego contemporáneo de estilo retro.
   - Al terminar, calcular el porcentaje de acuerdo entre codificadores y reportarlo.
3. Cualquier cambio de respuesta se hace **solo en `data/juegos.json`**; la web se
   recalcula sola. Pero los textos de los niveles 7, 8, 9 y 11 mencionan cifras: si
   cambian, hay que actualizarlos también (pídeselo a Cursor o a Claude).
4. Verificar las cifras de ventas el día de la entrega.
5. Leer todo el texto en voz alta una vez: que suene a ustedes y que cada uno pueda
   defender cualquier párrafo.
6. Confirmar el DOI de Addeo y Guerra (el PDF muestra `NR.2026.1.03` en el
   encabezado y `NR.2025.1.03` en "cómo citar"; se usó el del encabezado).
