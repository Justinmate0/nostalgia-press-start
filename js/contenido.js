// contenido.js — carga data/contenido-claro.json (capa de lenguaje claro para Stories) y
// resuelve los marcadores {res.*}, {lit.*} y {global.*}. Ninguna cifra se escribe a mano:
// las de nuestro estudio salen de resumen() (datos.js) y las de la literatura, del bloque "lit".

const RUTA_CONTENIDO = 'data/contenido-claro.json';
const ESPACIO_FINO = ' '; // espacio indivisible entre cifra y "%"

export async function cargarContenido(ruta = RUTA_CONTENIDO) {
  const respuesta = await fetch(ruta);
  if (!respuesta.ok) {
    throw new Error(`No se pudo cargar ${ruta} (HTTP ${respuesta.status})`);
  }
  return respuesta.json();
}

// Contexto de resolución: { res, lit, global }.
export function crearContexto(contenido, res) {
  return { res, lit: contenido.lit, global: contenido.global };
}

function obtener(ctx, ruta) {
  return ruta.split('.').reduce((obj, clave) => (obj == null ? undefined : obj[clave]), ctx);
}

function formatearLit(entrada) {
  return entrada.unidad ? `${entrada.valor}${ESPACIO_FINO}${entrada.unidad}` : String(entrada.valor);
}

// Reemplaza cada {ruta} del texto. Si no se puede resolver, deja el marcador y avisa en consola.
export function interpolar(texto, ctx) {
  if (typeof texto !== 'string' || !texto.includes('{')) return texto;
  return texto.replace(/\{([^}]+)\}/g, (marcador, ruta) => {
    let valor = obtener(ctx, ruta);
    if (ruta.startsWith('lit.') && valor && typeof valor === 'object') valor = formatearLit(valor);
    if (valor === undefined || valor === null || typeof valor === 'object') {
      console.error(`[contenido.js] Marcador sin resolver: ${marcador}`);
      return marcador;
    }
    // Los textos globales pueden traer a su vez marcadores (por ejemplo avisos).
    return interpolar(String(valor), ctx);
  });
}

// Copia profunda del contenido con todos los textos ya resueltos.
export function resolverContenido(contenido, res) {
  const ctx = crearContexto(contenido, res);
  const resolver = (valor) => {
    if (typeof valor === 'string') return interpolar(valor, ctx);
    if (Array.isArray(valor)) return valor.map(resolver);
    if (valor && typeof valor === 'object') {
      // Las claves que empiezan con "_" son notas de documentación del JSON: se descartan.
      return Object.fromEntries(
        Object.entries(valor)
          .filter(([k]) => !k.startsWith('_'))
          .map(([k, v]) => [k, resolver(v)])
      );
    }
    return valor;
  };
  const { lit, ...resto } = contenido;
  return { ...resolver(resto), lit };
}

// Lookups cómodos sobre el contenido ya resuelto.
export function nivelPorId(contenido, id) {
  return contenido.niveles.find((nivel) => nivel.nivel === String(id));
}

export function zonaDeNivel(contenido, id) {
  return contenido.zonas.find((zona) => zona.niveles.includes(String(id)));
}
