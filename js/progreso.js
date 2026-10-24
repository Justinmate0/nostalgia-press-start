// progreso.js — progreso compartido entre los dos modos. Se guarda en localStorage:
// { nivelesVistos: ["0","1",...], modoPreferido: "stories" | "documento" | null }.
// Ver un capítulo en Stories cuenta igual que llegar a ese nivel en Documento.
// Todo va dentro de try/catch: en ventanas privadas o con el almacenamiento bloqueado la
// web sigue funcionando (el progreso solo vive en memoria).

const CLAVE = 'nostalgia-press-start:progreso:v1';
const XP_POR_NIVEL = 10;

let estado = { nivelesVistos: [], modoPreferido: null };
const oyentes = new Set();

function leer() {
  try {
    const bruto = window.localStorage.getItem(CLAVE);
    if (!bruto) return;
    const guardado = JSON.parse(bruto);
    if (Array.isArray(guardado.nivelesVistos)) estado.nivelesVistos = guardado.nivelesVistos.map(String);
    if (guardado.modoPreferido === 'stories' || guardado.modoPreferido === 'documento') {
      estado.modoPreferido = guardado.modoPreferido;
    }
  } catch (error) {
    /* almacenamiento no disponible o dañado: se ignora */
  }
}

function guardar() {
  try {
    window.localStorage.setItem(CLAVE, JSON.stringify(estado));
  } catch (error) {
    /* sin almacenamiento: el progreso queda en memoria */
  }
}

function avisar() {
  for (const oyente of oyentes) oyente(obtenerProgreso());
}

export function iniciarProgreso() {
  leer();
}

export function obtenerProgreso() {
  return {
    nivelesVistos: [...estado.nivelesVistos],
    modoPreferido: estado.modoPreferido,
    xp: estado.nivelesVistos.length * XP_POR_NIVEL,
  };
}

export function marcarVisto(id) {
  const clave = String(id);
  if (estado.nivelesVistos.includes(clave)) return;
  estado.nivelesVistos.push(clave);
  guardar();
  avisar();
}

export function fijarModoPreferido(modo) {
  estado.modoPreferido = modo;
  guardar();
}

export function reiniciarProgreso() {
  estado = { nivelesVistos: [], modoPreferido: estado.modoPreferido };
  guardar();
  avisar();
}

export function alCambiarProgreso(oyente) {
  oyentes.add(oyente);
  return () => oyentes.delete(oyente);
}
