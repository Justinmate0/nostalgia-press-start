// test.js — simulador "Hazle el test a tu juego" (BRIEF 8.5). Usa clasificarRespuestas() de
// datos.js para no duplicar la lógica de clasificación.

import { clasificarRespuestas, puntos, clasificar, PREGUNTAS_PUNTUABLES, PREGUNTAS } from './datos.js';
import { chipResultado, etiquetaResultado } from './ficha.js';

function crear(etiqueta, clase, texto) {
  const nodo = document.createElement(etiqueta);
  if (clase) nodo.className = clase;
  if (texto !== undefined) nodo.textContent = texto;
  return nodo;
}

let contador = 0;

// preguntas: [{ id, etiqueta, pregunta, tema, regla_clara, ejemplo, fuente }] del contenido claro.
// titulo: encabezado opcional (en Documento ya hay un h3 propio).
export function renderSimulador(contenedor, juegos, preguntas, { titulo = 'Hazle el test a tu juego', nivelTitulo = 'h3' } = {}) {
  const idBase = `sim-${(contador += 1)}`;
  const raiz = crear('div', 'simulador');
  raiz.append(crear(nivelTitulo, 'simulador-titulo', titulo));
  raiz.append(crear('p', 'texto-pequeno', 'Piensa en un juego y responde Sí o No. Te mostramos cómo lo clasificaría nuestro test.'));

  const respuestas = { P1: false, P2: false, P3: false, P4: false, P5: false };

  const resultado = crear('div', 'sim-resultado');
  resultado.setAttribute('role', 'status');
  resultado.setAttribute('aria-live', 'polite');

  function actualizar() {
    const clasificacion = clasificarRespuestas(respuestas);
    const suma = PREGUNTAS_PUNTUABLES.filter((p) => respuestas[p]).length;
    resultado.replaceChildren();
    resultado.dataset.resultado = clasificacion;
    const linea = crear('p', 'sim-linea');
    linea.append(chipResultado(clasificacion));
    linea.append(
      document.createTextNode(
        clasificacion === 'Relanzamiento'
          ? ' Es una nueva versión de un juego anterior, así que se reporta aparte.'
          : ` ${suma} ${suma === 1 ? 'punto' : 'puntos'} de 4.`
      )
    );
    resultado.append(linea);

    const parecidos = juegos.filter((j) => clasificar(j) === clasificacion).map((j) => j.nombre);
    if (parecidos.length) {
      resultado.append(
        crear('p', 'texto-pequeno', `En nuestra muestra con este resultado (${etiquetaResultado(clasificacion).toLowerCase()}): ${parecidos.join(', ')}.`)
      );
    }
  }

  for (const id of ['P1', 'P2', 'P3', 'P4', 'P5']) {
    const pregunta = preguntas.find((p) => p.id === id);
    if (!pregunta || !PREGUNTAS.includes(id)) continue;
    const grupo = crear('fieldset', 'sim-pregunta');
    const leyenda = crear('legend', '', `${id}. ${pregunta.pregunta}`);
    grupo.append(leyenda);
    grupo.append(crear('p', 'texto-pequeno', pregunta.regla_clara));
    const opciones = crear('div', 'sim-opciones');
    for (const [valor, texto] of [[true, 'Sí'], [false, 'No']]) {
      const etiqueta = crear('label', 'sim-opcion');
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `${idBase}-${id}`;
      radio.checked = respuestas[id] === valor;
      radio.addEventListener('change', () => {
        respuestas[id] = valor;
        actualizar();
      });
      etiqueta.append(radio, crear('span', '', texto));
      opciones.append(etiqueta);
    }
    grupo.append(opciones);
    raiz.append(grupo);
  }

  raiz.append(resultado);
  actualizar();
  contenedor.replaceChildren(raiz);
  return raiz;
}

// Cuenta de puntos de un juego, reexportada para que Stories no importe de dos módulos.
export { puntos };
