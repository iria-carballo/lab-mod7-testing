import { partida } from "./modelo";

//FUNCIONES PRINCIPALES

export function dameCarta(): string {
  const numeroAleatorio = generaNumeroAleatorio();
  const carta = generaCarta(numeroAleatorio);
  const urlCarta = dameUrlCarta(carta);
  const puntos = obtenerPuntos(carta);
  const puntosSumados = sumaPuntos(puntos);
  desactivarPuntos(puntosSumados);

  return urlCarta;
}

export function plantarse(): void {
  comprobarPartida();
  generarMensajeFinPartida();
}

export function saberQueHabriaPasado(): string {
  const numeroAleatorio = generaNumeroAleatorio();
  const carta = generaCarta(numeroAleatorio);
  const urlCarta = dameUrlCarta(carta);
  const puntos = obtenerPuntos(carta);
  const puntosSumados = sumaPuntos(puntos);
  desactivarPuntos(puntosSumados);
  generarMensajeHipotetico();

  return urlCarta;
}

//OTRAS FUNCIONES

export const generaNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

export const generaCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }
  return numeroAleatorio;
};

export const dameUrlCarta = (carta: number) => {
  switch (carta) {
    case 0:
      return "./assets/img/1_as-copas.jpg";
      break;
    case 1:
      return "./assets/img/1_as-copas.jpg";
      break;
    case 2:
      return "./assets/img/2_dos-copas.jpg";
      break;
    case 3:
      return "./assets/img/3_tres-copas.jpg";
      break;
    case 4:
      return "./assets/img/4_cuatro-copas.jpg";
      break;
    case 5:
      return "./assets/img/5_cinco-copas.jpg";
      break;
    case 6:
      return "./assets/img/6_seis-copas.jpg";
      break;
    case 7:
      return "./assets/img/7_siete-copas.jpg";
      break;
    case 10:
      return "./assets/img/10_sota-copas.jpg";
      break;
    case 11:
      return "./assets/img/11_caballo-copas.jpg";
      break;
    case 12:
      return "./assets/img/12_rey-copas.jpg";
      break;
    default:
      return "./assets/img/back.jpg";
  }
};

export const obtenerPuntos = (carta: number) => {
  if (carta > 7) {
    return 0.5;
  }

  return carta;
};

export const sumaPuntos = (puntos: number) => {
  return puntos + partida.puntuacion;
};

export const desactivarPuntos = (puntosNuevos: number) => {
  partida.puntuacion = puntosNuevos;
};

export const comprobarPartida = () => {
  if (partida.puntuacion === 7.5 || partida.puntuacion > 7.5) {
    generarMensajeFinPartida();
  }
};

export function generarMensajeFinPartida() {
  if (partida.puntuacion < 4) {
    partida.mensaje = `"Has sido muy conservador"`;
  } else if (partida.puntuacion >= 4 && partida.puntuacion < 5) {
    partida.mensaje = `"¿Te ha entrado el canguelo eh?"`;
  } else if (partida.puntuacion >= 5 && partida.puntuacion < 7.5) {
    partida.mensaje = `"Casi casi..."`;
  } else if (partida.puntuacion === 7.5) {
    partida.mensaje = `"¡Lo has clavado! ¡Enhorabuena!"`;
  } else if (partida.puntuacion > 7.5) {
    partida.mensaje = `"GAME OVER"`;
  } else {
    partida.mensaje = "";
  }
  return partida.mensaje;
}

export function generarMensajeHipotetico() {
  if (partida.puntuacion < 7.5) {
    partida.mensaje = `"Te habrías quedado igual"`;
  } else if (partida.puntuacion === 7.5) {
    partida.mensaje = `"Ohhhh... una carta más y habrías ganado"`;
  } else if (partida.puntuacion > 7.5) {
    partida.mensaje = `"¡Buena decisión! Te habrías pasado de 7.5"`;
  }
  return partida.mensaje;
}
