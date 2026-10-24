// ficha.js — componentes de datos del nivel 5 y 7 (BRIEF 8.2 y 8.6): matriz de muestra,
// tarjetas de totales y ficha interactiva de los 12 juegos. Todo se calcula desde juegos.json.

import { puntos, clasificar, totales, RESULTADOS, PREGUNTAS } from './datos.js';

const ETIQUETA_RESULTADO = {
  Alta: 'Nostalgia alta',
  Moderada: 'Nostalgia moderada',
  Nula: 'Sin nostalgia',
  Relanzamiento: 'Relanzamiento',
};

function crear(etiqueta, clase, texto) {
  const nodo = document.createElement(etiqueta);
  if (clase) nodo.className = clase;
  if (texto !== undefined) nodo.textContent = texto;
  return nodo;
}

export function etiquetaResultado(resultado) {
  return ETIQUETA_RESULTADO[resultado] || resultado;
}

// "230 M", "37,4 M"; las ventas estimadas llevan "≈ … +".
export function formatearVentas(juego) {
  const numero = juego.ventas_m.toLocaleString('es-EC', { maximumFractionDigits: 1 });
  return juego.ventas_estimada ? `más de ${numero} M (est.)` : `${numero} M`;
}

export function chipResultado(resultado) {
  const chip = crear('span', 'res-chip', etiquetaResultado(resultado));
  chip.dataset.resultado = resultado;
  return chip;
}

// ---------------------------------------------------------------- totales
export function renderTotales(contenedor, juegos, etiquetas = ETIQUETA_RESULTADO) {
  const cuenta = totales(juegos);
  const lista = crear('ul', 'totales');
  lista.setAttribute('aria-label', 'Totales por resultado');
  for (const resultado of ['Alta', 'Moderada', 'Nula', 'Relanzamiento']) {
    const item = crear('li', 'total-card');
    item.dataset.resultado = resultado;
    item.append(crear('span', 'total-cifra', String(cuenta[resultado])));
    item.append(crear('span', 'total-etiqueta', etiquetas[resultado] || resultado));
    lista.append(item);
  }
  contenedor.replaceChildren(lista);
  return lista;
}

// ---------------------------------------------------------------- matriz 2 × 2
export function renderMatriz(contenedor, juegos) {
  const cuadro = crear('div', 'matriz');
  cuadro.setAttribute('role', 'group');
  cuadro.setAttribute('aria-label', 'Muestra de 12 juegos: tipo de producción por década');

  const celdas = [
    { tipo: 'AAA', decada: '2000s' },
    { tipo: 'AAA', decada: '2010s' },
    { tipo: 'Indie', decada: '2000s' },
    { tipo: 'Indie', decada: '2010s' },
  ];
  for (const { tipo, decada } of celdas) {
    const celda = crear('section', 'matriz-celda');
    celda.dataset.tipo = tipo;
    const cabecera = crear('h4', 'matriz-cabecera', `${tipo === 'AAA' ? 'AAA' : 'Independiente'} · ${decada}`);
    celda.append(cabecera);
    const lista = crear('ol', 'matriz-lista');
    const grupo = juegos
      .filter((j) => j.tipo === tipo && j.decada === decada)
      .sort((a, b) => b.ventas_m - a.ventas_m);
    for (const juego of grupo) {
      const item = crear('li', 'matriz-juego');
      item.append(crear('strong', '', juego.nombre));
      item.append(crear('span', 'num', ` ${juego.anio} · ${formatearVentas(juego)}`));
      lista.append(item);
    }
    celda.append(lista);
    cuadro.append(celda);
  }
  contenedor.replaceChildren(cuadro);
  return cuadro;
}

// ---------------------------------------------------------------- ficha interactiva
const FILTROS = [
  { id: 'todos', etiqueta: 'Todos', prueba: () => true },
  { id: '2000s', etiqueta: '2000s', prueba: (j) => j.decada === '2000s' },
  { id: '2010s', etiqueta: '2010s', prueba: (j) => j.decada === '2010s' },
  { id: 'aaa', etiqueta: 'AAA', prueba: (j) => j.tipo === 'AAA' },
  { id: 'indie', etiqueta: 'Indie', prueba: (j) => j.tipo === 'Indie' },
];

function celdaRespuesta(juego, pregunta) {
  const td = crear('td', 'num resp');
  const si = juego.respuestas[pregunta] === true;
  const dudosa = juego.verificar && juego.verificar.includes(pregunta);
  td.textContent = `${si ? 'Sí' : 'No'}${dudosa ? '*' : ''}`;
  td.dataset.valor = si ? 'si' : 'no';
  if (dudosa) td.title = 'Pendiente de confirmación por el segundo codificador';
  return td;
}

export function renderFicha(contenedor, juegos) {
  const raiz = crear('div', 'ficha');

  const barra = crear('div', 'ficha-filtros');
  barra.setAttribute('role', 'group');
  barra.setAttribute('aria-label', 'Filtrar juegos');
  const botones = [];
  for (const filtro of FILTROS) {
    const boton = crear('button', 'filtro', filtro.etiqueta);
    boton.type = 'button';
    boton.setAttribute('aria-pressed', filtro.id === 'todos' ? 'true' : 'false');
    boton.dataset.filtro = filtro.id;
    barra.append(boton);
    botones.push(boton);
  }
  raiz.append(barra);

  const envoltura = crear('div', 'tabla-scroll');
  envoltura.setAttribute('role', 'region');
  envoltura.setAttribute('aria-label', 'Ficha de los 12 juegos');
  envoltura.tabIndex = 0;
  const tabla = crear('table', 'ficha-tabla');
  const cabecera = crear('thead');
  const filaCab = crear('tr');
  for (const texto of ['Juego', 'Año', 'Tipo', ...PREGUNTAS, 'Pts', 'Resultado']) {
    const th = crear('th', '', texto);
    th.scope = 'col';
    filaCab.append(th);
  }
  cabecera.append(filaCab);
  tabla.append(cabecera);
  const cuerpo = crear('tbody');
  tabla.append(cuerpo);
  envoltura.append(tabla);
  raiz.append(envoltura);
  raiz.append(
    crear('p', 'texto-pequeno', 'Toca un juego para ver por qué recibió esas respuestas. * = pendiente de confirmación por el segundo codificador.')
  );

  const estado = { filtro: 'todos', abierto: null };

  function pintar() {
    const filtro = FILTROS.find((f) => f.id === estado.filtro);
    cuerpo.replaceChildren();
    for (const juego of juegos.filter(filtro.prueba)) {
      const fila = crear('tr', 'ficha-fila');
      const th = crear('th');
      th.scope = 'row';
      const boton = crear('button', 'ficha-juego', juego.nombre);
      boton.type = 'button';
      boton.setAttribute('aria-expanded', estado.abierto === juego.id ? 'true' : 'false');
      boton.addEventListener('click', () => {
        estado.abierto = estado.abierto === juego.id ? null : juego.id;
        pintar();
      });
      th.append(boton);
      fila.append(th);
      fila.append(crear('td', 'num', String(juego.anio)));
      fila.append(crear('td', '', juego.tipo === 'AAA' ? 'AAA' : 'Indie'));
      for (const p of PREGUNTAS) fila.append(celdaRespuesta(juego, p));
      fila.append(crear('td', 'num', String(puntos(juego))));
      const celdaRes = crear('td');
      celdaRes.append(chipResultado(clasificar(juego)));
      fila.append(celdaRes);
      cuerpo.append(fila);

      if (estado.abierto === juego.id) {
        const detalle = crear('tr', 'ficha-detalle');
        const td = crear('td');
        td.colSpan = 3 + PREGUNTAS.length + 2;
        td.append(crear('p', '', juego.evidencia));
        const extra = [];
        if (juego.tipo_nostalgia) extra.push(`Tipo de nostalgia: ${juego.tipo_nostalgia}`);
        if (juego.orientacion) extra.push(`Orientación: ${juego.orientacion}`);
        extra.push(`Saga: ${juego.saga}`);
        extra.push(`Ventas: ${formatearVentas(juego)}`);
        td.append(crear('p', 'texto-pequeno', extra.join(' · ')));
        detalle.append(td);
        cuerpo.append(detalle);
      }
    }
  }

  for (const boton of botones) {
    boton.addEventListener('click', () => {
      estado.filtro = boton.dataset.filtro;
      estado.abierto = null;
      for (const otro of botones) otro.setAttribute('aria-pressed', String(otro === boton));
      pintar();
    });
  }

  pintar();
  contenedor.replaceChildren(raiz);
  return raiz;
}

export { RESULTADOS, ETIQUETA_RESULTADO };
