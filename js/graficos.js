// graficos.js — gráficos SVG generados por JS (BRIEF 8.6). Sin librerías.
// Diseñados con un viewBox angosto (360 de ancho) para que en celular el texto se vea a
// tamaño real y en escritorio simplemente escale. Todos los números salen de juegos.json.

import { puntos, clasificar, conteoPorPregunta, porTipo, PREGUNTAS } from './datos.js';

const NS = 'http://www.w3.org/2000/svg';

function el(etiqueta, atributos = {}, texto) {
  const nodo = document.createElementNS(NS, etiqueta);
  for (const [clave, valor] of Object.entries(atributos)) nodo.setAttribute(clave, valor);
  if (texto !== undefined) nodo.textContent = texto;
  return nodo;
}

const ANCHO = 360;
const MARGEN = 16;

// Nombres cortos de las preguntas para los gráficos.
const ETIQUETA_PREGUNTA = {
  P1: 'P1 · Estética',
  P2: 'P2 · Reglas',
  P3: 'P3 · Saga',
  P4: 'P4 · Formato',
  P5: 'P5 · Relanzamiento',
};

function envolver(titulo, descripcion, svg, nota, conTitulo = true) {
  const figura = document.createElement('figure');
  figura.className = 'grafico';
  if (conTitulo) {
    const encabezado = document.createElement('h4');
    encabezado.className = 'grafico-titulo';
    encabezado.textContent = titulo;
    figura.append(encabezado);
  }
  figura.append(svg);
  if (nota) {
    const pie = document.createElement('figcaption');
    pie.textContent = nota;
    figura.append(pie);
  }
  svg.setAttribute('role', 'img');
  const idTitulo = `g-${Math.random().toString(36).slice(2, 8)}`;
  svg.prepend(el('title', { id: `${idTitulo}-t` }, titulo), el('desc', { id: `${idTitulo}-d` }, descripcion));
  svg.setAttribute('aria-labelledby', `${idTitulo}-t ${idTitulo}-d`);
  return figura;
}

// Barras horizontales: puntos (0 a 4) de cada juego, coloreadas por tipo de producción.
export function graficoPuntos(juegos, { animar = false, conTitulo = true } = {}) {
  const ordenados = [...juegos].sort((a, b) => puntos(b) - puntos(a) || a.nombre.localeCompare(b.nombre, 'es'));
  const altoFila = 44;
  const arriba = 34;
  const alto = arriba + ordenados.length * altoFila + 28;
  const x0 = MARGEN;
  const largo = ANCHO - 2 * MARGEN - 34;
  const svg = el('svg', {
    viewBox: `0 0 ${ANCHO} ${alto}`,
    class: `g-svg${animar ? ' g-animado' : ''}`,
    'shape-rendering': 'crispEdges',
  });

  // Cuadrícula y eje superior (0 a 4 puntos)
  for (let p = 0; p <= 4; p += 1) {
    const x = x0 + (largo * p) / 4;
    svg.append(el('line', { x1: x, y1: arriba - 8, x2: x, y2: alto - 24, class: 'g-rejilla' }));
    svg.append(el('text', { x, y: arriba - 14, class: 'g-eje', 'text-anchor': 'middle' }, String(p)));
  }

  ordenados.forEach((juego, i) => {
    const y = arriba + i * altoFila;
    const pts = puntos(juego);
    const resultado = clasificar(juego);
    const marca = juego.verificar && juego.verificar.length ? ' *' : '';
    svg.append(
      el('text', { x: x0, y: y + 14, class: 'g-etiqueta' },
        `${juego.nombre}${resultado === 'Relanzamiento' ? ' (relanzamiento)' : ''}${marca}`)
    );
    const ancho = (largo * pts) / 4;
    const clase = juego.tipo === 'AAA' ? 'g-barra-aaa' : 'g-barra-indie';
    svg.append(el('rect', { x: x0, y: y + 20, width: largo, height: 12, class: 'g-fondo' }));
    if (pts > 0) {
      const barra = el('rect', { x: x0, y: y + 20, width: ancho, height: 12, class: clase });
      barra.style.setProperty('--ancho-final', `${ancho}px`);
      svg.append(barra);
    }
    svg.append(el('text', { x: x0 + largo + 8, y: y + 31, class: 'g-valor' }, String(pts)));
  });

  // Leyenda
  const yLey = alto - 12;
  svg.append(el('rect', { x: x0, y: yLey - 10, width: 12, height: 12, class: 'g-barra-aaa' }));
  svg.append(el('text', { x: x0 + 18, y: yLey, class: 'g-leyenda' }, 'AAA'));
  svg.append(el('rect', { x: x0 + 70, y: yLey - 10, width: 12, height: 12, class: 'g-barra-indie' }));
  svg.append(el('text', { x: x0 + 88, y: yLey, class: 'g-leyenda' }, 'Indie'));

  const descripcion = ordenados.map((j) => `${j.nombre}: ${puntos(j)} de 4`).join('; ');
  return envolver(
    'Puntos de nostalgia por juego (0 a 4)',
    descripcion,
    svg,
    juegos.some((j) => j.verificar && j.verificar.length)
      ? '* Respuesta pendiente de confirmación por el segundo codificador.'
      : '',
    conTitulo
  );
}

// Barras agrupadas: cuántos juegos de cada tipo cumplen cada pregunta.
export function graficoPreguntas(juegos, { animar = false, conTitulo = true } = {}) {
  const grupos = [
    { nombre: 'AAA', juegos: porTipo(juegos, 'AAA'), clase: 'g-barra-aaa' },
    { nombre: 'Indie', juegos: porTipo(juegos, 'Indie'), clase: 'g-barra-indie' },
  ];
  const conteos = grupos.map((g) => conteoPorPregunta(g.juegos));
  const altoBloque = 74;
  const arriba = 8;
  const alto = arriba + PREGUNTAS.length * altoBloque + 28;
  const x0 = MARGEN;
  const largo = ANCHO - 2 * MARGEN - 40;
  const svg = el('svg', {
    viewBox: `0 0 ${ANCHO} ${alto}`,
    class: `g-svg${animar ? ' g-animado' : ''}`,
    'shape-rendering': 'crispEdges',
  });

  PREGUNTAS.forEach((p, i) => {
    const y = arriba + i * altoBloque;
    svg.append(el('text', { x: x0, y: y + 14, class: 'g-etiqueta' }, ETIQUETA_PREGUNTA[p]));
    grupos.forEach((grupo, g) => {
      const n = grupo.juegos.length;
      const cuenta = conteos[g][p];
      const yBarra = y + 24 + g * 22;
      const ancho = n ? (largo * cuenta) / n : 0;
      svg.append(el('rect', { x: x0, y: yBarra, width: largo, height: 14, class: 'g-fondo' }));
      if (cuenta > 0) {
        const barra = el('rect', { x: x0, y: yBarra, width: ancho, height: 14, class: grupo.clase });
        barra.style.setProperty('--ancho-final', `${ancho}px`);
        svg.append(barra);
      }
      svg.append(el('text', { x: x0 + largo + 8, y: yBarra + 12, class: 'g-valor' }, `${cuenta}/${n}`));
    });
  });

  const yLey = alto - 12;
  svg.append(el('rect', { x: x0, y: yLey - 10, width: 12, height: 12, class: 'g-barra-aaa' }));
  svg.append(el('text', { x: x0 + 18, y: yLey, class: 'g-leyenda' }, 'AAA'));
  svg.append(el('rect', { x: x0 + 70, y: yLey - 10, width: 12, height: 12, class: 'g-barra-indie' }));
  svg.append(el('text', { x: x0 + 88, y: yLey, class: 'g-leyenda' }, 'Indie'));

  const descripcion = PREGUNTAS.map((p) =>
    `${ETIQUETA_PREGUNTA[p]}: AAA ${conteos[0][p]} de ${grupos[0].juegos.length}, indie ${conteos[1][p]} de ${grupos[1].juegos.length}`
  ).join('; ');
  return envolver(
    '¿Qué pregunta suma cada grupo?',
    descripcion,
    svg,
    'La P5 no suma puntos: marca a los relanzamientos.',
    conTitulo
  );
}

// Barras simples a partir de cifras ya resueltas (por ejemplo, 35 % / 35 % / 30 % de MTM).
// Cada elemento: { etiqueta, valor (número 0–100) }.
export function graficoBarrasSimples(titulo, elementos, { animar = false, conTitulo = true } = {}) {
  const altoFila = 46;
  const arriba = 6;
  const alto = arriba + elementos.length * altoFila + 8;
  const x0 = MARGEN;
  const largo = ANCHO - 2 * MARGEN - 46;
  const svg = el('svg', {
    viewBox: `0 0 ${ANCHO} ${alto}`,
    class: `g-svg${animar ? ' g-animado' : ''}`,
    'shape-rendering': 'crispEdges',
  });
  elementos.forEach((e, i) => {
    const y = arriba + i * altoFila;
    const ancho = (largo * e.valor) / 100;
    svg.append(el('text', { x: x0, y: y + 14, class: 'g-etiqueta' }, e.etiqueta));
    svg.append(el('rect', { x: x0, y: y + 22, width: largo, height: 14, class: 'g-fondo' }));
    const barra = el('rect', { x: x0, y: y + 22, width: ancho, height: 14, class: 'g-barra-acento' });
    barra.style.setProperty('--ancho-final', `${ancho}px`);
    svg.append(barra);
    svg.append(el('text', { x: x0 + largo + 8, y: y + 34, class: 'g-valor' }, `${e.valor} %`));
  });
  return envolver(titulo, elementos.map((e) => `${e.etiqueta}: ${e.valor} %`).join('; '), svg, '', conTitulo);
}
