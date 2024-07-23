// Juego de cartas "Siete y media"


// Carga inicial del juego

let puntuacion : number = 0;

const botonDameCarta = document.getElementById('botonDameCarta');
if (botonDameCarta !== null && botonDameCarta !== undefined) {
    botonDameCarta.addEventListener("click", dameCarta);
}

const mePlanto = document.getElementById('mePlanto');
if (mePlanto !== null && mePlanto !== undefined){
    mePlanto.addEventListener("click", plantarse);
    }

const queHabriaPasado = document.getElementById('queHabriaPasado');
if(queHabriaPasado !== null && queHabriaPasado !==undefined){
    queHabriaPasado.addEventListener("click", saberQueHabriaPasado);
}

const handleNuevaPartida = document.getElementById('handleNuevaPartida');
if (handleNuevaPartida !== null && handleNuevaPartida !== undefined){
    handleNuevaPartida.addEventListener("click", cargarNuevaPartida);
}


let mensaje : string = "";
const mensajeContainer = document.getElementById("mensaje");

document.addEventListener("DOMContentLoaded", cargarNuevaPartida);


// FUNCIONES PRINCIPALES ------------------------------------


function dameCarta(): void {
    const numeroAleatorio = generaNumeroAleatorio();
    const carta = generaCarta(numeroAleatorio);
    const urlCarta = dameUrlCarta(carta);
    mostrarCarta(urlCarta);
    const puntos = obtenerPuntos(carta);
    const puntosSumados = sumaPuntos(puntos);
    desactivarPuntos(puntosSumados);
    desactivarBotonPorId ("mePlanto", false);
    comprobarPartida();
    mostrarPuntuacion();
}

function plantarse () :void {
    desactivarBotonPorId ("mePlanto", true);
    desactivarBotonPorId ("queHabriaPasado", false);
    desactivarBotonPorId ("handleNuevaPartida", false);
    desactivarBotonPorId ("botonDameCarta", true);
    mostrarElementoPorId("queHabriaPasado", "flex");
    comprobarPartida();
    generarMensajeFinPartida();
    mostrarMensaje();
}

function saberQueHabriaPasado () : void {
    const numeroAleatorio = generaNumeroAleatorio();
    const carta = generaCarta(numeroAleatorio);
    const urlCarta = dameUrlCarta(carta);
    mostrarCarta(urlCarta);
    const puntos = obtenerPuntos(carta);
    const puntosSumados = sumaPuntos(puntos);
    desactivarPuntos(puntosSumados);
    mostrarPuntuacion();
    generarMensajeHipotetico();
    mostrarMensaje();
    desactivarBotonPorId ("queHabriaPasado", true);
}

function cargarNuevaPartida () :void {;
    desactivarBotonPorId ("mePlanto", true);
    desactivarBotonPorId ("queHabriaPasado", true);
    desactivarBotonPorId ("handleNuevaPartida", true);
    desactivarBotonPorId ("botonDameCarta", false);
    mostrarElementoPorId("queHabriaPasado", "none");
    mostrarElementoPorId("mensaje", "none");
    resetearPuntuacion();
    mostrarPuntuacion();
}


//OTRAS FUNCIONES ------------------------------------


const generaNumeroAleatorio = () => {
    return Math.floor(Math.random() * 10) + 1;
}
  
const generaCarta = (numeroAleatorio: number) => {
    if (numeroAleatorio > 7) {
      return numeroAleatorio + 2;
    }
    return numeroAleatorio;
}

const dameUrlCarta = (carta: number) => {
    switch (carta) {
            case 0:
                return"./assets/img/1_as-copas.jpg";
                break;
            case 1:
                return"./assets/img/1_as-copas.jpg";
                break
            case 2:
                return"./assets/img/2_dos-copas.jpg";
                break;
            case 3:
                return"./assets/img/3_tres-copas.jpg";          
                break;
            case 4:
                return"./assets/img/4_cuatro-copas.jpg";     
                break;
            case 5:
                return"./assets/img/5_cinco-copas.jpg";
                break;    
            case 6:
                return"./assets/img/6_seis-copas.jpg";     
                break;  
            case 7:
                return"./assets/img/7_siete-copas.jpg";
                break;
            case 10:
                return"./assets/img/10_sota-copas.jpg";
                break
            case 11:
                return"./assets/img/11_caballo-copas.jpg";
                break;
            case 12:
                return"./assets/img/12_rey-copas.jpg";      
                break;
            default:
                return"./assets/img/back.jpg";
        }
}
  
  
const obtenerPuntos = (carta: number) => {
    if (carta > 7) {
      return 0.5;
    }
  
    return carta;
}
  
const sumaPuntos = (puntos: number) => {
    return puntos + puntuacion;
}
  
const desactivarPuntos = (puntosNuevos: number) => {
    puntuacion = puntosNuevos;
}
  
  
const mostrarCarta = (urlCarta: string): void => {
    const imgCarta = document.getElementById("nuevaCarta");
  
    if (imgCarta !== null && imgCarta !== undefined && imgCarta instanceof HTMLImageElement) {
      imgCarta.src = urlCarta;
    }
}

const comprobarPartida = () => {
    if (puntuacion === 7.5 || puntuacion > 7.5) {
      generarMensajeFinPartida();
      mostrarMensaje();
      finalizarPartida ();
    }
}

function mostrarPuntuacion() : void {
    const puntos = document.getElementById("puntos");
    if (puntos instanceof HTMLDivElement && puntos != undefined && puntos != null )  {
        puntos.innerHTML = `Tu puntuación: ${puntuacion.toString().padStart(2,"0")}`;  
    } 
}

function generarMensajeFinPartida () {
    if (puntuacion < 4) {
        mensaje = `"Has sido muy conservador"`;
      } else if (puntuacion >= 4 && puntuacion < 5) {
        mensaje = `"¿Te ha entrado el canguelo eh?"`;
      } else if (puntuacion >= 5 && puntuacion < 7.5) {
        mensaje = `"Casi casi..."`;
      } else if (puntuacion === 7.5) {
        mensaje = `"¡Lo has clavado! ¡Enhorabuena!"`;
      } else if (puntuacion > 7.5) {
        mensaje = `"GAME OVER"`;
      } else {
        mensaje = "";
      }
  return mensaje;
}

const mostrarMensaje = () => {
    if (mensajeContainer instanceof HTMLDivElement) {
        mensajeContainer.style.display = "flex";
        mensajeContainer.innerHTML = mensaje;
      }  
}

function generarMensajeHipotetico () {
    if (puntuacion <= 7) {
        mensaje = `"Te habrías quedado igual"`;
    } else if (puntuacion === 7.5) {
        mensaje = `"Ohhhh... una carta más y habrías ganado"`;
    } else if (puntuacion > 7.5){
        mensaje = `"¡Buena decisión! Te habrías pasado de 7.5"`;
    }
  return mensaje;
}


const desactivarBotonPorId = (idDelBoton: string, estado: boolean) => {
    const boton = document.getElementById(idDelBoton);
    if (boton instanceof HTMLButtonElement) {
        boton.disabled = estado;
    }
}

const mostrarElementoPorId = (idDelElemento : string, parametro : string) => {
    const elemento = document.getElementById(idDelElemento);
    if (elemento !== null && elemento !== undefined && elemento instanceof HTMLElement) {
        elemento.style.display = parametro;
    }
}


const resetearPuntuacion = () => {
    puntuacion = 0;
}

const finalizarPartida = () => {
    desactivarBotonPorId ("mePlanto", true);
    desactivarBotonPorId ("handleNuevaPartida", false);
    desactivarBotonPorId ("botonDameCarta", true);
} 
