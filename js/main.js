// main.js — arranque, selector de modo, navegación del Documento y modo lectura.
// La web tiene dos modos que leen los mismos datos y comparten el progreso:
//   · STORIES   (#stories, #stories/<nivel>)  → js/stories.js
//   · DOCUMENTO (#doc, #doc/nivel-<n>, #nivel-<n>) → el texto académico completo de index.html
// Sin hash (o #inicio) se muestra el selector.

import { cargarDatos, comprobarClasificacion, resumen } from './datos.js';
import { cargarContenido, resolverContenido } from './contenido.js';
import { iniciarProgreso, obtenerProgreso, marcarVisto, fijarModoPreferido, alCambiarProgreso } from './progreso.js';
import { renderTotales, renderMatriz, renderFicha } from './ficha.js';
import { graficoPuntos, graficoPreguntas } from './graficos.js';
import { renderSimulador } from './test.js';
import { crearStories } from './stories.js';

const app = { datos: null, juegos: [], res: null, contenido: null, stories: null };
const NIVELES_DOCUMENTO = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

function crear(etiqueta, clase, texto) {
  const nodo = document.createElement(etiqueta);
  if (clase) nodo.className = clase;
  if (texto !== undefined) nodo.textContent = texto;
  return nodo;
}

function etiquetaMundo(id) {
  if (id === '0') return 'PRESS START';
  if (id === '11') return 'GAME OVER';
  if (id === '12') return 'Créditos';
  return `Mundo ${id}`;
}

// ------------------------------------------------------------------ selector
function montarSelector() {
  const { selector } = app.contenido.global;
  const raiz = document.getElementById('selector');
  const marco = crear('div', 'selector-marco');
  marco.append(
    crear('p', 'nivel-etiqueta', '1 PLAYER'),
    crear('h1', 'selector-nombre', 'Nostalgia: Press Start'),
    crear('p', 'subtitulo', 'La nostalgia como recurso de desarrollo y estrategia comercial en videojuegos contemporáneos'),
    crear('h2', 'selector-titulo', selector.titulo),
    crear('p', 'texto-pequeno', selector.subtitulo)
  );
  const lista = crear('div', 'selector-opciones');
  for (const opcion of selector.opciones) {
    if (opcion.modo === 'juego') continue; // El modo JUEGO quedó fuera del alcance de esta entrega.
    const enlace = crear('a', 'selector-opcion');
    enlace.href = opcion.modo === 'stories' ? '#stories' : '#doc';
    enlace.append(crear('span', 'selector-opcion-nombre pixel', opcion.nombre), crear('span', 'selector-opcion-detalle', opcion.detalle));
    enlace.addEventListener('click', () => fijarModoPreferido(opcion.modo));
    lista.append(enlace);
  }
  marco.append(lista);
  marco.append(crear('p', 'texto-pequeno selector-aviso', 'Los dos formatos muestran la misma investigación y usan los mismos datos.'));
  raiz.replaceChildren(marco);
}

// ------------------------------------------------------------------ cabecera del Documento
let mapaEnlaces = new Map();

function montarCabecera() {
  const cabecera = document.getElementById('cabecera');
  const barra = crear('div', 'cab-barra');

  const cambiar = crear('a', 'cab-boton', '◀ Modos');
  cambiar.href = '#inicio';
  cambiar.setAttribute('aria-label', app.contenido.global.selector.cambiar_modo);

  const mapa = document.getElementById('mapa');
  mapa.setAttribute('aria-label', 'Mapa de niveles');
  const lista = crear('ol', 'mapa-lista');
  for (const id of NIVELES_DOCUMENTO) {
    const item = crear('li');
    const enlace = crear('a', 'mapa-nivel', id);
    enlace.href = `#doc/nivel-${id}`;
    const nivel = app.contenido.niveles.find((n) => n.nivel === id);
    enlace.setAttribute('aria-label', `${etiquetaMundo(id)}${nivel ? `: ${nivel.titulo_corto}` : ''}`);
    enlace.title = nivel ? nivel.titulo_corto : etiquetaMundo(id);
    item.append(enlace);
    lista.append(item);
    mapaEnlaces.set(id, enlace);
  }
  mapa.replaceChildren(lista);

  const xp = crear('div', 'xp');
  const xpTexto = crear('span', 'xp-texto pixel', 'XP 0');
  const xpBarra = crear('div', 'xp-barra');
  xpBarra.setAttribute('role', 'progressbar');
  xpBarra.setAttribute('aria-label', 'Progreso de lectura');
  xpBarra.setAttribute('aria-valuemin', '0');
  xpBarra.setAttribute('aria-valuemax', '100');
  const xpRelleno = crear('div', 'xp-relleno');
  xpBarra.append(xpRelleno);
  xp.append(xpTexto, xpBarra);

  const lectura = crear('button', 'cab-boton cab-lectura', 'Leer como documento');
  lectura.type = 'button';
  lectura.setAttribute('aria-pressed', 'false');
  lectura.addEventListener('click', () => alternarLectura());

  const imprimir = crear('button', 'cab-boton cab-imprimir', 'Imprimir / PDF');
  imprimir.type = 'button';
  imprimir.addEventListener('click', () => window.print());

  barra.append(cambiar, mapa, xp, lectura, imprimir);
  cabecera.replaceChildren(barra);

  const total = app.contenido.niveles.length * 10;
  function pintarXp(progreso) {
    const enDocumento = progreso.nivelesVistos.filter((id) => NIVELES_DOCUMENTO.includes(id));
    xpTexto.textContent = `XP ${progreso.xp}`;
    const porcentaje = Math.min(100, Math.round((progreso.xp / total) * 100));
    xpRelleno.style.width = `${porcentaje}%`;
    xpBarra.setAttribute('aria-valuenow', String(porcentaje));
    for (const [id, enlace] of mapaEnlaces) enlace.classList.toggle('visto', enDocumento.includes(id));
  }
  pintarXp(obtenerProgreso());
  alCambiarProgreso(pintarXp);
}

// ------------------------------------------------------------------ modo lectura
function alternarLectura(forzar) {
  const activo = typeof forzar === 'boolean' ? forzar : !document.body.classList.contains('lectura');
  document.body.classList.toggle('lectura', activo);
  for (const boton of document.querySelectorAll('.cab-lectura, .boton-modo-lectura')) {
    boton.setAttribute('aria-pressed', String(activo));
  }
  const cab = document.querySelector('.cab-lectura');
  if (cab) cab.textContent = activo ? 'Volver al diseño retro' : 'Leer como documento';
}

// ------------------------------------------------------------------ componentes de datos
function montarComponentesDocumento() {
  const { juegos } = app;
  const nivel6 = app.contenido.niveles.find((n) => n.nivel === '6');
  const etiquetasTotales = Object.fromEntries(
    app.contenido.niveles
      .find((n) => n.nivel === '7')
      .pantallas.find((p) => p.tipo === 'totales')
      .items.map((i) => [i.clave, i.etiqueta])
  );
  const poner = (id, fn) => {
    const nodo = document.getElementById(id);
    if (nodo) fn(nodo);
  };
  poner('matriz-muestra', (n) => renderMatriz(n, juegos));
  poner('totales', (n) => renderTotales(n, juegos, etiquetasTotales));
  poner('ficha', (n) => renderFicha(n, juegos));
  poner('grafico-puntos', (n) => n.replaceChildren(graficoPuntos(juegos)));
  poner('grafico-preguntas', (n) => n.replaceChildren(graficoPreguntas(juegos)));
  poner('simulador-test', (n) => renderSimulador(n, juegos, nivel6.preguntas));
}

// Marca el nivel visible como actual y los leídos como vistos.
function observarNiveles() {
  const secciones = [...document.querySelectorAll('#contenido .nivel')];
  const visibles = new Map();
  const observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) visibles.set(entrada.target.dataset.nivel, entrada.intersectionRatio);
      let mejor = null;
      for (const [id, ratio] of visibles) if (ratio > 0 && (mejor === null || ratio > visibles.get(mejor))) mejor = id;
      for (const [id, enlace] of mapaEnlaces) {
        if (id === mejor) enlace.setAttribute('aria-current', 'step');
        else enlace.removeAttribute('aria-current');
      }
      for (const [id, ratio] of visibles) if (ratio >= 0.35 || (id === '12' && ratio > 0)) marcarVisto(id);
    },
    { threshold: [0, 0.15, 0.35, 0.6, 0.9] }
  );
  secciones.forEach((s) => observador.observe(s));
}

// ------------------------------------------------------------------ enrutamiento
function fijarModo(modo) {
  document.body.dataset.modo = modo;
  if (modo !== 'stories') app.stories?.cerrar();
}

function enrutar() {
  const hash = window.location.hash.replace(/^#/, '');
  const [raiz, resto] = hash.split('/');

  if (raiz === 'stories') {
    fijarModo('stories');
    window.scrollTo(0, 0);
    app.stories.abrir(resto || '0');
    return;
  }

  const esDoc = raiz === 'doc' || /^nivel-\d+$/.test(raiz);
  if (esDoc) {
    const yaEstaba = document.body.dataset.modo === 'documento';
    fijarModo('documento');
    const idNivel = raiz === 'doc' ? resto : raiz;
    const destino = idNivel ? document.getElementById(idNivel) : null;
    if (destino) {
      // Si veníamos de otro modo, hay que desplazar a mano; si no, el ancla nativa ya lo hizo.
      if (!yaEstaba || raiz === 'doc') destino.scrollIntoView({ block: 'start' });
    } else if (!yaEstaba) {
      window.scrollTo(0, 0);
    }
    return;
  }

  fijarModo('selector');
  window.scrollTo(0, 0);
  document.querySelector('#selector .selector-opcion')?.focus({ preventScroll: true });
}

// Los botones "Leer como documento" del contenido (nivel 11) activan el modo lectura.
function conectarBotonesLectura() {
  for (const boton of document.querySelectorAll('.boton-modo-lectura')) {
    boton.addEventListener('click', () => alternarLectura(true));
  }
}

// ------------------------------------------------------------------ arranque
async function iniciar() {
  iniciarProgreso();
  let bruto;
  try {
    [app.datos, bruto] = await Promise.all([cargarDatos(), cargarContenido()]);
  } catch (error) {
    console.error('[main.js] No se pudieron cargar los datos o el contenido:', error);
    // Sin los JSON la web sigue siendo legible: se muestra el Documento tal como está en el HTML.
    document.body.dataset.modo = 'documento';
    return;
  }

  app.juegos = app.datos.juegos;
  const discrepancias = comprobarClasificacion(app.juegos);
  if (discrepancias.length) console.error('[main.js] Hay discrepancias en la clasificación:', discrepancias);
  app.res = resumen(app.juegos);
  app.contenido = resolverContenido(bruto, app.res);

  montarSelector();
  montarCabecera();
  montarComponentesDocumento();
  conectarBotonesLectura();
  app.stories = crearStories(document.getElementById('modo-stories'), app);
  observarNiveles();

  window.addEventListener('hashchange', enrutar);
  enrutar();

  // Expuesto para inspección manual desde la consola del navegador.
  window.nostalgia = { datos: app.datos, resumen: app.res, contenido: app.contenido, stories: app.stories };
}

iniciar();
