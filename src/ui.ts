import { partida } from "./modelo";
import {
  dameCarta,
  plantarse,
  comprobarPartida,
  saberQueHabriaPasado,
} from "./motor";

//Revisado

//handles

const botonDameCarta = document.getElementById("botonDameCarta");
if (botonDameCarta !== null && botonDameCarta !== undefined) {
  botonDameCarta.addEventListener("click", dameCartaUi);
}

const mePlanto = document.getElementById("mePlanto");
if (mePlanto !== null && mePlanto !== undefined) {
  mePlanto.addEventListener("click", plantarseUi);
}

const queHabriaPasado = document.getElementById("queHabriaPasado");
if (queHabriaPasado !== null && queHabriaPasado !== undefined) {
  queHabriaPasado.addEventListener("click", saberQueHabriaPasadoUi);
}

const handleNuevaPartida = document.getElementById("handleNuevaPartida");
if (handleNuevaPartida !== null && handleNuevaPartida !== undefined) {
  handleNuevaPartida.addEventListener("click", cargarNuevaPartida);
}

//Funciones Principales

function dameCartaUi(): void {
  const urlCarta = dameCarta();
  mostrarCarta(urlCarta);
  desactivarBotonPorId("mePlanto", false);
  comprobarPartida();
  comprobarPartidaUi();
  mostrarPuntuacion();
}

function plantarseUi(): void {
  plantarse();
  desactivarBotonPorId("mePlanto", true);
  desactivarBotonPorId("queHabriaPasado", false);
  desactivarBotonPorId("handleNuevaPartida", false);
  desactivarBotonPorId("botonDameCarta", true);
  mostrarElementoPorId("queHabriaPasado", "flex");
  comprobarPartidaUi();
  mostrarMensaje();
}

function saberQueHabriaPasadoUi(): void {
  const urlCarta = saberQueHabriaPasado();
  mostrarCarta(urlCarta);
  mostrarPuntuacion();
  mostrarMensaje();
  desactivarBotonPorId("queHabriaPasado", true);
}

export function cargarNuevaPartida(): void {
  partida.puntuacion = 0;
  desactivarBotonPorId("mePlanto", true);
  desactivarBotonPorId("queHabriaPasado", true);
  desactivarBotonPorId("handleNuevaPartida", true);
  desactivarBotonPorId("botonDameCarta", false);
  mostrarElementoPorId("queHabriaPasado", "none");
  mostrarElementoPorId("mensaje", "none");
  mostrarPuntuacion();
}

//OTRAS FUNCIONES

const comprobarPartidaUi = () => {
  if (partida.puntuacion === 7.5 || partida.puntuacion > 7.5) {
    mostrarMensaje();
    finalizarPartidaUi();
  }
};

const finalizarPartidaUi = () => {
  desactivarBotonPorId("mePlanto", true);
  desactivarBotonPorId("handleNuevaPartida", false);
  desactivarBotonPorId("botonDameCarta", true);
};

const mostrarCarta = (urlCarta: string): void => {
  const imgCarta = document.getElementById("nuevaCarta");

  if (
    imgCarta !== null &&
    imgCarta !== undefined &&
    imgCarta instanceof HTMLImageElement
  ) {
    imgCarta.src = urlCarta;
  }
};

function mostrarPuntuacion(): void {
  const puntos = document.getElementById("puntos");
  if (
    puntos instanceof HTMLDivElement &&
    puntos != undefined &&
    puntos != null
  ) {
    puntos.innerHTML = `Tu puntuación: ${partida.puntuacion
      .toString()
      .padStart(2, "0")}`;
  }
}

const mostrarMensaje = () => {
  if (partida.mensajeContainer instanceof HTMLDivElement) {
    partida.mensajeContainer.style.display = "flex";
    partida.mensajeContainer.innerHTML = partida.mensaje;
  }
};

//================ Funciones para desactivar y activar elementos del DOM

const desactivarBotonPorId = (idDelBoton: string, estado: boolean) => {
  const boton = document.getElementById(idDelBoton);
  if (boton instanceof HTMLButtonElement) {
    boton.disabled = estado;
  }
};

const mostrarElementoPorId = (idDelElemento: string, parametro: string) => {
  const elemento = document.getElementById(idDelElemento);
  if (
    elemento !== null &&
    elemento !== undefined &&
    elemento instanceof HTMLElement
  ) {
    elemento.style.display = parametro;
  }
};
