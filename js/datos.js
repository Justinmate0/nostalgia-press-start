// datos.js — carga de data/juegos.json y cálculos de la sección 6.1 del BRIEF.
// Todas las funciones son puras (reciben juegos, devuelven valores) para que
// graficos.js, ficha.js y test.js reutilicen exactamente la misma lógica.

export const PREGUNTAS_PUNTUABLES = ['P1', 'P2', 'P3', 'P4'];
export const PREGUNTAS = ['P1', 'P2', 'P3', 'P4', 'P5'];
export const RESULTADOS = ['Alta', 'Moderada', 'Nula', 'Relanzamiento'];

const RUTA_DATOS = 'data/juegos.json';

// Ruta relativa (sin barra inicial) para que funcione en GitHub Pages dentro de una subcarpeta.
export async function cargarDatos(ruta = RUTA_DATOS) {
  const respuesta = await fetch(ruta);
  if (!respuesta.ok) {
    throw new Error(`No se pudo cargar ${ruta} (HTTP ${respuesta.status})`);
  }
  return respuesta.json();
}

// Número de Sí entre P1 y P4. P5 no suma.
export function puntos(juego) {
  return PREGUNTAS_PUNTUABLES.filter((p) => juego.respuestas[p] === true).length;
}

// Clasificación a partir de respuestas P1–P5 (sirve también para el simulador del nivel 6).
export function clasificarRespuestas(respuestas) {
  if (respuestas.P5 === true) return 'Relanzamiento';
  const suma = PREGUNTAS_PUNTUABLES.filter((p) => respuestas[p] === true).length;
  if (suma >= 3) return 'Alta';
  if (suma >= 1) return 'Moderada';
  return 'Nula';
}

export function clasificar(juego) {
  return clasificarRespuestas(juego.respuestas);
}

// Media de puntos del grupo. Incluye relanzamientos (ver límite 5 del nivel 10).
export function promedio(grupo) {
  if (!grupo.length) return 0;
  const suma = grupo.reduce((acum, juego) => acum + puntos(juego), 0);
  return suma / grupo.length;
}

// Una cifra decimal con coma (es-EC): 1 → "1,0"; 1,1666 → "1,2".
export function formatearPromedio(valor) {
  return valor.toLocaleString('es-EC', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

// Cuántos juegos del grupo tienen Sí en cada pregunta (P1 a P5).
export function conteoPorPregunta(grupo) {
  const conteo = {};
  for (const p of PREGUNTAS) {
    conteo[p] = grupo.filter((juego) => juego.respuestas[p] === true).length;
  }
  return conteo;
}

// Cuántos juegos hay en cada resultado, según la clasificación calculada.
export function totales(juegos) {
  const conteo = {};
  for (const r of RESULTADOS) conteo[r] = 0;
  for (const juego of juegos) conteo[clasificar(juego)] += 1;
  return conteo;
}

// Filtros por los estratos de la muestra.
export function porDecada(juegos, decada) {
  return juegos.filter((juego) => juego.decada === decada);
}

export function porTipo(juegos, tipo) {
  return juegos.filter((juego) => juego.tipo === tipo);
}

// Juegos con algún recurso nostálgico: todos menos los de resultado Nula.
export function conNostalgia(juegos) {
  return juegos.filter((juego) => clasificar(juego) !== 'Nula');
}

// Comprobación exigida en 6.1: el resultado calculado debe coincidir con el campo
// `resultado` de los 12 juegos. Devuelve la lista de discrepancias y las reporta en consola.
export function comprobarClasificacion(juegos) {
  const discrepancias = [];
  for (const juego of juegos) {
    const calculado = clasificar(juego);
    if (calculado !== juego.resultado) {
      discrepancias.push({ id: juego.id, calculado, declarado: juego.resultado });
      console.error(
        `[datos.js] ${juego.nombre}: resultado calculado "${calculado}" ≠ declarado "${juego.resultado}"`
      );
    }
  }
  return discrepancias;
}

// Resumen con todos los cálculos de 6.1, listo para tablas, gráficos y la consola.
export function resumen(juegos) {
  const grupos = {
    '2000s': porDecada(juegos, '2000s'),
    '2010s': porDecada(juegos, '2010s'),
    AAA: porTipo(juegos, 'AAA'),
    Indie: porTipo(juegos, 'Indie'),
  };

  const promedios = {};
  const conteos = {};
  for (const [nombre, grupo] of Object.entries(grupos)) {
    const media = promedio(grupo);
    promedios[nombre] = {
      valor: media,
      texto: formatearPromedio(media),
      sumaPuntos: grupo.reduce((acum, juego) => acum + puntos(juego), 0),
      n: grupo.length,
    };
    conteos[nombre] = conteoPorPregunta(grupo);
  }

  const nostalgicos = conNostalgia(juegos);

  // Diferencia absoluta entre los promedios de las dos décadas, con coma y 2 decimales (0,17).
  const diferenciaDecadas = Math.abs(promedios['2010s'].valor - promedios['2000s'].valor)
    .toLocaleString('es-EC', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return {
    n: juegos.length,
    diferenciaDecadas,
    promedios,
    conteoPorPregunta: conteos,
    totales: totales(juegos),
    conNostalgia: {
      cantidad: nostalgicos.length,
      simples: nostalgicos.filter((juego) => juego.tipo_nostalgia === 'Simple').length,
      juegos: nostalgicos.map((juego) => juego.nombre),
    },
  };
}
