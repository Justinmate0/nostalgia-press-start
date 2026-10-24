// main.js — arranque de la web. En la Fase 1 solo carga los datos y comprueba
// los cálculos en consola. La navegación y el modo lectura llegan en la Fase 3.

import { cargarDatos, comprobarClasificacion, puntos, clasificar, resumen } from './datos.js';

async function iniciar() {
  let datos;
  try {
    datos = await cargarDatos();
  } catch (error) {
    console.error('[main.js] No se pudieron cargar los datos:', error);
    return;
  }

  const { juegos } = datos;
  const discrepancias = comprobarClasificacion(juegos);
  const r = resumen(juegos);

  console.group('Nostalgia: Press Start — comprobación de datos (sección 6.1)');
  console.log(`Juegos cargados: ${r.n} (actualizado ${datos.actualizado})`);
  console.log(
    discrepancias.length === 0
      ? 'Clasificación: los 12 resultados calculados coinciden con el campo "resultado".'
      : `Clasificación: ${discrepancias.length} discrepancia(s), ver errores arriba.`
  );

  console.table(
    juegos.map((j) => ({
      juego: j.nombre,
      decada: j.decada,
      tipo: j.tipo,
      P1: j.respuestas.P1,
      P2: j.respuestas.P2,
      P3: j.respuestas.P3,
      P4: j.respuestas.P4,
      P5: j.respuestas.P5,
      puntos: puntos(j),
      calculado: clasificar(j),
      declarado: j.resultado,
    }))
  );

  console.table(
    Object.fromEntries(
      Object.entries(r.promedios).map(([grupo, p]) => [
        grupo,
        { promedio: p.texto, exacto: p.valor, suma: `${p.sumaPuntos}/${p.n}` },
      ])
    )
  );
  console.table(r.conteoPorPregunta);
  console.table(r.totales);
  console.log(
    `Juegos con nostalgia: ${r.conNostalgia.cantidad} (${r.conNostalgia.simples} de tipo Simple):`,
    r.conNostalgia.juegos.join(', ')
  );
  console.groupEnd();

  // Expuesto para inspección manual desde la consola del navegador.
  window.nostalgia = { datos, resumen: r };
}

iniciar();
