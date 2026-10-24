// stories.js — modo STORIES: pantallas verticales tipo reels, una idea por pantalla.
// Lee la capa de lenguaje claro (data/contenido-claro.json, ya con marcadores resueltos) y
// los datos de juegos.json. El texto académico completo vive en el modo Documento
// (botón "Leer completo").

import { puntos, clasificar, PREGUNTAS } from './datos.js';
import { renderTotales, renderMatriz, chipResultado, etiquetaResultado, formatearVentas } from './ficha.js';
import { graficoPuntos, graficoPreguntas, graficoBarrasSimples } from './graficos.js';
import { renderSimulador } from './test.js';
import { marcarVisto, obtenerProgreso, alCambiarProgreso } from './progreso.js';

// Pantallas que contienen controles propios: ahí se apagan las zonas táctiles y el deslizamiento.
const TIPOS_INTERACTIVOS = new Set(['simulador', 'ficha_resultados', 'jefe', 'cierre', 'enlace', 'creditos']);

const reducirMovimiento = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function crear(etiqueta, clase, texto) {
  const nodo = document.createElement(etiqueta);
  if (clase) nodo.className = clase;
  if (texto !== undefined) nodo.textContent = texto;
  return nodo;
}

function etiquetaMundo(id) {
  if (id === '0') return '1 PLAYER';
  if (id === 'relevancia') return 'BONUS';
  if (id === '11') return 'GAME OVER';
  if (id === '12') return 'CRÉDITOS';
  return `MUNDO ${id}`;
}

function fuente(texto) {
  return texto ? crear('p', 'story-fuente', texto) : null;
}

function anadir(padre, ...hijos) {
  for (const hijo of hijos) if (hijo) padre.append(hijo);
  return padre;
}

// Cifra que "sube" desde 0 hasta su valor, con pasos como un contador arcade.
function animarCifra(nodo, textoFinal) {
  const coincidencia = /^(\D*)(\d+)(.*)$/.exec(textoFinal);
  nodo.textContent = textoFinal;
  if (!coincidencia || reducirMovimiento()) return;
  const [, prefijo, numero, sufijo] = coincidencia;
  const meta = Number(numero);
  const pasos = Math.min(24, Math.max(6, meta));
  let paso = 0;
  const cuenta = window.setInterval(() => {
    paso += 1;
    const valor = Math.round((meta * paso) / pasos);
    nodo.textContent = `${prefijo}${valor}${sufijo}`;
    if (paso >= pasos) window.clearInterval(cuenta);
  }, 36);
}

function numeroDe(texto) {
  const m = /(\d+)/.exec(texto);
  return m ? Number(m[1]) : 0;
}

export function crearStories(contenedor, app) {
  const { juegos, contenido } = app;
  const nivel6 = contenido.niveles.find((n) => n.nivel === '6');
  const nivel8 = contenido.niveles.find((n) => n.nivel === '8');

  // Capítulos = niveles del JSON, cada uno con una pantalla de apertura automática.
  const capitulos = contenido.niveles.map((nivel) => {
    const pantallas = [...nivel.pantallas];
    if (nivel.nivel !== '0' && nivel.nivel !== '12') {
      pantallas.unshift({ tipo: 'capitulo' });
    }
    return { ...nivel, pantallas };
  });

  const estado = { capitulo: 0, pantalla: 0, activo: false };

  // ---------------------------------------------------------- estructura
  const marco = crear('div', 'stories-marco');
  const arriba = crear('div', 'stories-top');
  const segmentos = crear('div', 'stories-segmentos');
  segmentos.setAttribute('aria-hidden', 'true');
  const meta = crear('div', 'stories-meta');
  const etiquetaCapitulo = crear('p', 'stories-capitulo');
  const xpEtiqueta = crear('span', 'stories-xp');
  const cerrar = crear('button', 'stories-cerrar', '✕');
  cerrar.type = 'button';
  cerrar.setAttribute('aria-label', contenido.global.selector.cambiar_modo);
  meta.append(etiquetaCapitulo, xpEtiqueta, cerrar);
  arriba.append(segmentos, meta);

  const lienzo = crear('div', 'stories-lienzo');
  lienzo.tabIndex = -1;
  lienzo.setAttribute('aria-live', 'polite');

  const pie = crear('div', 'stories-pie');
  const botonAnterior = crear('button', 'stories-nav', '◀');
  const botonSiguiente = crear('button', 'stories-nav', '▶');
  botonAnterior.type = botonSiguiente.type = 'button';
  botonAnterior.setAttribute('aria-label', 'Pantalla anterior');
  botonSiguiente.setAttribute('aria-label', 'Siguiente pantalla');
  const contador = crear('span', 'stories-contador');
  const leer = crear('a', 'stories-leer', contenido.global.controles.leer_completo);
  pie.append(botonAnterior, contador, leer, botonSiguiente);

  const ayuda = crear('p', 'visualmente-oculto', contenido.global.controles.stories);
  marco.append(arriba, lienzo, pie, ayuda);
  contenedor.replaceChildren(marco);

  // ---------------------------------------------------------- renderizadores
  const tipos = {
    capitulo(p, nivel) {
      const caja = crear('div', 'story-capitulo');
      anadir(
        caja,
        crear('p', 'story-kicker pixel', etiquetaMundo(nivel.nivel)),
        crear('h2', 'story-titulo-capitulo', nivel.frase_clave),
        crear('p', 'story-subtitulo', nivel.titulo_corto)
      );
      return caja;
    },

    portada(p) {
      const caja = crear('div', 'story-portada');
      anadir(
        caja,
        crear('p', 'story-kicker pixel', '1 PLAYER'),
        crear('h2', 'story-titulo-portada', p.titulo),
        crear('p', 'story-subtitulo', p.subtitulo),
        crear('p', 'story-autores', p.autores),
        crear('p', 'story-fuente', p.curso),
        crear('p', 'story-pista pixel', 'TOCA PARA EMPEZAR ▶')
      );
      return caja;
    },

    frase(p) {
      return anadir(crear('div', 'story-frase'), crear('p', 'story-texto-grande', p.texto), fuente(p.fuente));
    },

    frase_grande(p) {
      return anadir(crear('div', 'story-frase story-frase-acento'), crear('p', 'story-texto-enorme', p.texto), fuente(p.fuente));
    },

    cifra(p) {
      const caja = crear('div', 'story-cifra');
      const numero = crear('p', 'story-cifra-valor pixel');
      numero.dataset.largo = p.cifra.length > 6 ? 'largo' : 'corto';
      numero.setAttribute('aria-label', p.cifra);
      animarCifra(numero, p.cifra);
      anadir(caja, numero, crear('p', 'story-texto-grande', p.etiqueta), fuente(p.fuente));
      return caja;
    },

    comparacion(p) {
      const caja = crear('div', 'story-comparacion');
      if (p.titulo) caja.append(crear('h3', 'story-titulo', p.titulo));
      const par = crear('div', 'story-par');
      for (const lado of [p.izquierda, p.derecha]) {
        const tarjeta = crear('section', 'story-tarjeta');
        anadir(tarjeta, crear('h4', 'story-tarjeta-titulo', lado.titulo), crear('p', '', lado.texto), fuente(lado.fuente));
        par.append(tarjeta);
      }
      caja.append(par);
      return anadir(caja, fuente(p.fuente));
    },

    cita(p) {
      const caja = crear('figure', 'story-cita');
      const cita = crear('blockquote', '', `“${p.texto}”`);
      const pieCita = crear('figcaption', 'story-fuente', p.fuente);
      return anadir(caja, cita, pieCita);
    },

    lista(p) {
      const caja = crear('div', 'story-lista');
      if (p.titulo) caja.append(crear('h3', 'story-titulo', p.titulo));
      const ul = crear('ul', 'story-items');
      for (const item of p.items) ul.append(crear('li', '', item));
      return anadir(caja, ul, fuente(p.fuente));
    },

    glosario(p) {
      const caja = crear('div', 'story-glosario');
      caja.append(crear('h3', 'story-titulo', p.titulo));
      const dl = crear('dl', 'story-dl');
      for (const item of p.items) {
        dl.append(crear('dt', '', item.termino), crear('dd', '', item.definicion));
      }
      return anadir(caja, dl);
    },

    tabla_visual(p) {
      const caja = crear('div', 'story-tabla-visual');
      caja.append(crear('h3', 'story-titulo', p.titulo));
      for (const fila of p.filas) {
        const tarjeta = crear('section', 'story-tarjeta story-nivel');
        anadir(
          tarjeta,
          crear('h4', 'story-tarjeta-titulo pixel', fila.nombre),
          crear('p', '', fila.texto),
          crear('p', 'story-ejemplo', `Ejemplo: ${fila.ejemplo}`)
        );
        caja.append(tarjeta);
      }
      return anadir(caja, fuente(p.fuente));
    },

    enfoque(p) {
      const caja = crear('div', 'story-enfoque');
      caja.dataset.icono = p.icono;
      anadir(
        caja,
        crear('p', 'story-kicker pixel', 'PARA...'),
        crear('h3', 'story-titulo', p.titulo),
        crear('p', 'story-texto', p.texto)
      );
      if (p.dato) caja.append(crear('p', 'story-dato', p.dato));
      return caja;
    },

    pregunta_investigacion(p) {
      return anadir(
        crear('div', 'story-frase story-frase-acento'),
        crear('p', 'story-kicker pixel', p.titulo.toUpperCase()),
        crear('p', 'story-texto-enorme', p.texto)
      );
    },

    matriz_muestra(p) {
      const caja = crear('div', 'story-matriz');
      caja.append(crear('h3', 'story-titulo', p.titulo));
      caja.append(crear('p', 'story-texto', p.texto));
      const hueco = crear('div');
      renderMatriz(hueco, juegos);
      caja.append(hueco);
      return anadir(caja, p.nota ? crear('p', 'story-fuente', p.nota) : null);
    },

    pregunta_test(p) {
      const pregunta = nivel6.preguntas.find((q) => q.id === p.id);
      const caja = crear('div', 'story-pregunta-test');
      anadir(
        caja,
        crear('p', 'story-kicker pixel', `${pregunta.id} · ${pregunta.etiqueta.toUpperCase()}`),
        crear('h3', 'story-titulo', pregunta.pregunta),
        crear('p', 'story-texto', pregunta.regla_clara),
        crear('p', 'story-ejemplo', `Ejemplo de Sí: ${pregunta.ejemplo}`),
        fuente(pregunta.fuente)
      );
      return caja;
    },

    diagrama_clasificacion(p) {
      const caja = crear('div', 'story-diagrama');
      caja.append(crear('h3', 'story-titulo', p.titulo));
      const ol = crear('ol', 'story-pasos');
      p.pasos.forEach((paso) => ol.append(crear('li', '', paso)));
      return anadir(caja, ol);
    },

    simulador(p) {
      const caja = crear('div', 'story-simulador');
      renderSimulador(caja, juegos, nivel6.preguntas, { titulo: p.titulo, nivelTitulo: 'h3' });
      return caja;
    },

    totales(p) {
      const caja = crear('div', 'story-totales');
      caja.append(crear('h3', 'story-titulo', p.titulo));
      const etiquetas = Object.fromEntries(p.items.map((i) => [i.clave, i.etiqueta]));
      const hueco = crear('div');
      renderTotales(hueco, juegos, etiquetas);
      return anadir(caja, hueco);
    },

    ficha_resultados(p) {
      const caja = crear('div', 'story-ficha');
      caja.append(crear('p', 'story-texto', p.texto));
      const detalle = crear('div', 'story-ficha-detalle');
      detalle.setAttribute('aria-live', 'polite');
      detalle.append(crear('p', 'story-fuente', 'Elige un juego.'));
      for (const resultado of ['Alta', 'Moderada', 'Nula', 'Relanzamiento']) {
        const grupo = juegos.filter((j) => clasificar(j) === resultado);
        if (!grupo.length) continue;
        const seccion = crear('section', 'story-grupo');
        seccion.append(chipResultado(resultado));
        const fichas = crear('div', 'story-chips');
        for (const juego of grupo) {
          const boton = crear('button', 'story-juego', juego.nombre);
          boton.type = 'button';
          boton.addEventListener('click', () => {
            detalle.replaceChildren();
            const marcas = PREGUNTAS.map((q) => `${q}: ${juego.respuestas[q] ? 'Sí' : 'No'}${juego.verificar?.includes(q) ? '*' : ''}`).join(' · ');
            anadir(
              detalle,
              crear('h4', 'story-tarjeta-titulo', `${juego.nombre} (${juego.anio}) · ${puntos(juego)} pts`),
              crear('p', 'num', marcas),
              crear('p', '', juego.evidencia),
              crear('p', 'story-fuente', `${juego.tipo === 'AAA' ? 'AAA' : 'Indie'} · ${formatearVentas(juego)} · ${etiquetaResultado(clasificar(juego))}`)
            );
          });
          fichas.append(boton);
        }
        seccion.append(fichas);
        caja.append(seccion);
      }
      caja.append(detalle);
      return caja;
    },

    grafico(p) {
      const caja = crear('div', 'story-grafico');
      caja.append(crear('h3', 'story-titulo', p.titulo));
      const opciones = { animar: true, conTitulo: false };
      caja.append(p.grafico === 'puntos-por-juego' ? graficoPuntos(juegos, opciones) : graficoPreguntas(juegos, opciones));
      return anadir(caja, p.texto ? crear('p', 'story-texto', p.texto) : null);
    },

    barras_literatura(p) {
      const caja = crear('div', 'story-grafico');
      caja.append(crear('h3', 'story-titulo', p.titulo));
      const elementos = p.barras.map((b) => ({ etiqueta: b.etiqueta, valor: numeroDe(b.cifra) }));
      caja.append(graficoBarrasSimples(p.titulo, elementos, { animar: true, conTitulo: false }));
      return anadir(caja, fuente(p.fuente));
    },

    jefe(p) {
      const jefe = nivel8.jefes.find((j) => j.id === p.id);
      const caja = crear('div', 'story-jefe');
      anadir(caja, crear('p', 'story-kicker pixel', jefe.nombre.toUpperCase()), crear('h3', 'story-titulo', jefe.pregunta));
      const revelado = crear('div', 'story-jefe-revelado');
      revelado.hidden = true;
      anadir(
        revelado,
        crear('p', 'story-dato', jefe.dato),
        crear('p', 'story-veredicto pixel', jefe.veredicto),
        crear('p', 'story-texto', jefe.explicacion)
      );
      const boton = crear('button', 'boton', 'REVELAR DATO');
      boton.type = 'button';
      boton.setAttribute('aria-expanded', 'false');
      boton.addEventListener('click', () => {
        revelado.hidden = false;
        boton.hidden = true;
        boton.setAttribute('aria-expanded', 'true');
      });
      return anadir(caja, boton, revelado);
    },

    limite(p) {
      const caja = crear('div', 'story-limite');
      anadir(
        caja,
        crear('p', 'story-kicker pixel', `ADVERTENCIA ${p.numero}/7`),
        crear('h3', 'story-titulo', p.titulo),
        crear('p', 'story-texto', p.texto),
        fuente(p.fuente)
      );
      return caja;
    },

    cierre() {
      const caja = crear('div', 'story-cierre');
      anadir(caja, crear('p', 'story-fin pixel', contenido.global.cierre.titulo));
      const [inicio, otroModo, referencias] = contenido.global.cierre.botones;
      const acciones = crear('div', 'story-acciones');
      const botonInicio = crear('button', 'boton', `▶ ${inicio}`);
      botonInicio.type = 'button';
      botonInicio.addEventListener('click', () => irA(0, 0));
      const enlaceOtro = crear('a', 'boton boton-secundario', otroModo);
      enlaceOtro.href = '#doc';
      const enlaceRef = crear('a', 'boton boton-secundario', referencias);
      enlaceRef.href = '#doc/nivel-12';
      acciones.append(botonInicio, enlaceOtro, enlaceRef);
      return anadir(caja, acciones);
    },

    creditos(p) {
      return anadir(
        crear('div', 'story-creditos'),
        crear('p', 'story-kicker pixel', 'CRÉDITOS'),
        crear('p', 'story-texto-grande', p.equipo),
        crear('p', 'story-texto', p.curso)
      );
    },

    texto_pequeno(p) {
      return crear('p', 'story-fuente story-aviso', p.texto);
    },

    enlace(p) {
      const enlace = crear('a', 'boton boton-secundario', p.texto);
      enlace.href = p.destino === 'documento#nivel-12' ? '#doc/nivel-12' : '#doc';
      return anadir(crear('div', 'story-acciones'), enlace);
    },
  };

  // ---------------------------------------------------------- navegación
  function pantallaActual() {
    return capitulos[estado.capitulo].pantallas[estado.pantalla];
  }

  function pintarSegmentos() {
    const total = capitulos[estado.capitulo].pantallas.length;
    segmentos.replaceChildren();
    for (let i = 0; i < total; i += 1) {
      const segmento = crear('span', 'stories-segmento');
      if (i < estado.pantalla) segmento.classList.add('hecho');
      if (i === estado.pantalla) segmento.classList.add('actual');
      segmentos.append(segmento);
    }
  }

  function pintarXp() {
    xpEtiqueta.textContent = `XP ${obtenerProgreso().xp}`;
  }

  function pintar() {
    const capitulo = capitulos[estado.capitulo];
    const pantalla = pantallaActual();
    const interactiva = TIPOS_INTERACTIVOS.has(pantalla.tipo);
    etiquetaCapitulo.textContent = `${etiquetaMundo(capitulo.nivel)} · ${capitulo.titulo_corto}`;
    pintarSegmentos();
    pintarXp();
    contador.textContent = `${estado.pantalla + 1}/${capitulo.pantallas.length}`;

    const articulo = crear('article', `story-pantalla tipo-${pantalla.tipo}`);
    articulo.dataset.capitulo = capitulo.nivel;
    const renderizar = tipos[pantalla.tipo];
    if (renderizar) {
      articulo.append(renderizar(pantalla, capitulo));
    } else {
      console.error(`[stories.js] Tipo de pantalla sin renderizador: ${pantalla.tipo}`);
    }
    lienzo.replaceChildren(articulo);
    lienzo.scrollTop = 0;
    marco.classList.toggle('interactiva', interactiva);

    // "Leer completo": solo existe versión académica para los niveles numerados.
    const hayDocumento = /^\d+$/.test(capitulo.nivel);
    leer.hidden = !hayDocumento;
    if (hayDocumento) leer.href = `#doc/nivel-${capitulo.nivel}`;

    const esPrimera = estado.capitulo === 0 && estado.pantalla === 0;
    const esUltima = estado.capitulo === capitulos.length - 1 && estado.pantalla === capitulo.pantallas.length - 1;
    botonAnterior.disabled = esPrimera;
    botonSiguiente.disabled = esUltima;

    // Un capítulo cuenta como visto al llegar a su última pantalla.
    if (estado.pantalla === capitulo.pantallas.length - 1) marcarVisto(capitulo.nivel);
    history.replaceState(null, '', `#stories/${capitulo.nivel}`);
  }

  function irA(capitulo, pantalla) {
    estado.capitulo = Math.max(0, Math.min(capitulos.length - 1, capitulo));
    const total = capitulos[estado.capitulo].pantallas.length;
    estado.pantalla = Math.max(0, Math.min(total - 1, pantalla));
    pintar();
  }

  function siguiente() {
    const capitulo = capitulos[estado.capitulo];
    if (estado.pantalla < capitulo.pantallas.length - 1) irA(estado.capitulo, estado.pantalla + 1);
    else if (estado.capitulo < capitulos.length - 1) irA(estado.capitulo + 1, 0);
  }

  function anterior() {
    if (estado.pantalla > 0) irA(estado.capitulo, estado.pantalla - 1);
    else if (estado.capitulo > 0) {
      const prev = capitulos[estado.capitulo - 1];
      irA(estado.capitulo - 1, prev.pantallas.length - 1);
    }
  }

  botonSiguiente.addEventListener('click', siguiente);
  botonAnterior.addEventListener('click', anterior);
  cerrar.addEventListener('click', () => {
    window.location.hash = '#inicio';
  });

  document.addEventListener('keydown', (evento) => {
    if (!estado.activo) return;
    const objetivo = evento.target;
    const enControl = objetivo instanceof HTMLElement && (objetivo.matches('input, select, textarea') || objetivo.isContentEditable);
    if (enControl) return;
    if (evento.key === 'ArrowRight' || (evento.key === ' ' && !objetivo.matches?.('button, a'))) {
      evento.preventDefault();
      siguiente();
    } else if (evento.key === 'ArrowLeft') {
      evento.preventDefault();
      anterior();
    } else if (evento.key === 'Escape') {
      window.location.hash = '#inicio';
    }
  });

  // Tocar el tercio izquierdo vuelve; el resto avanza. Deslizar a los lados también navega.
  // Ambas cosas se apagan en pantallas con controles propios (simulador, jefes, fichas...).
  let inicioX = null;
  let ignorarClic = false;
  lienzo.addEventListener('pointerdown', (e) => {
    inicioX = e.clientX;
  });
  lienzo.addEventListener('pointerup', (e) => {
    if (inicioX === null || marco.classList.contains('interactiva')) return;
    const dx = e.clientX - inicioX;
    inicioX = null;
    if (Math.abs(dx) > 60) {
      ignorarClic = true;
      window.setTimeout(() => { ignorarClic = false; }, 80);
      (dx < 0 ? siguiente : anterior)();
    }
  });
  lienzo.addEventListener('click', (e) => {
    if (ignorarClic || marco.classList.contains('interactiva')) return;
    if (e.target instanceof Element && e.target.closest('a, button, input, label, summary')) return;
    if (String(window.getSelection?.() || '')) return;
    const caja = lienzo.getBoundingClientRect();
    if (e.clientX - caja.left < caja.width * 0.33) anterior();
    else siguiente();
  });

  alCambiarProgreso(pintarXp);

  return {
    abrir(idCapitulo) {
      estado.activo = true;
      const indice = capitulos.findIndex((c) => c.nivel === String(idCapitulo));
      if (indice >= 0) irA(indice, 0);
      else irA(estado.capitulo, estado.pantalla);
      lienzo.focus({ preventScroll: true });
    },
    cerrar() {
      estado.activo = false;
    },
    // Para la comprobación automática de capturas.
    irA,
    capitulos,
  };
}
