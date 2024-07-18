// Objetivo: Juego de cartas "Siete y media"

let puntuacion : number = 0;
let carta : number;
const mePlanto = document.getElementById("mePlanto") as HTMLButtonElement;
if (mePlanto != null && mePlanto != undefined) {
    mePlanto.disabled = true;
}
const queHabriaPasado = document.getElementById("queHabriaPasado") as HTMLButtonElement;
if (queHabriaPasado != null && queHabriaPasado != undefined) {
    queHabriaPasado.disabled = true;
    queHabriaPasado.style.display = "none";
}

let mensaje : string = "";
const mensajeContainer = document.getElementById("mensaje");
if (mensajeContainer != null && mensajeContainer != undefined)
mensajeContainer.style.display = "none";

// Mostrar puntuación

function muestraPuntuacion() : void {
    const puntos = document.getElementById("puntos");
    if (puntos instanceof HTMLDivElement && puntos != undefined && puntos != null )  {
        puntos.innerHTML = `Tu puntuación: ${puntuacion.toString().padStart(2,"0")}`;  
    } 
}

function getPuntuacion() : number {
    return puntuacion;
}

document.addEventListener( "DOMContentLoaded", muestraPuntuacion);

//Elegir una carta de forma aleatoria

function dameCarta () : void {
    const numeroDECarta = Math.floor(Math.random() * 10) + 1;

    if (numeroDECarta > 7) {
        carta = numeroDECarta + 2;
    } else {
        carta = numeroDECarta;
    }

    console.log (`Valor de la carta:${carta}`);

}

//Asignar una imagen y puntuación a cada valor de carta

function mostrarCarta (carta :number) :void {
    const imgCarta = document.getElementById("nuevaCarta"); 
    if (imgCarta instanceof HTMLImageElement)
        
        {

        switch (carta) {
            case 1:
                imgCarta.src="./assets/img/1_as-copas.jpg";
                imgCarta.alt="As de copas";
                puntuacion += 1;

                break;

            case 2:
                imgCarta.src="./assets/img/2_dos-copas.jpg";
                imgCarta.alt="Dos de copas";
                puntuacion += 2;
            
    
                break;
            case 3:
                imgCarta.src="./assets/img/3_tres-copas.jpg";
                imgCarta.alt="Tres de copas";
                puntuacion += 3;
                
                break;
            case 4:
                imgCarta.src="./assets/img/4_cuatro-copas.jpg";
                imgCarta.alt="Cuatro de copas";
                puntuacion += 4;
        
                break;
            
            case 5:
                imgCarta.src="./assets/img/5_cinco-copas.jpg";
                imgCarta.alt="Cinco de copas";
                puntuacion += 5;
        
                break;    
            
            case 6:
                imgCarta.src="./assets/img/6_seis-copas.jpg";
                imgCarta.alt="Seis de copas";
                puntuacion += 6;
        
                break;  
            
            case 7:
                imgCarta.src="./assets/img/7_siete-copas.jpg";
                imgCarta.alt="Siete de copas";
                puntuacion += 7;
        
                break;
            
            case 10:
                imgCarta.src="./assets/img/10_sota-copas.jpg";
                imgCarta.alt="Sota de copas";
                puntuacion += 0.5;
    
                break;

            case 11:
                imgCarta.src="./assets/img/11_caballo-copas.jpg";
                imgCarta.alt="Caballo de copas";
                puntuacion += 0.5;
        
                break;
            
            case 12:
                imgCarta.src="./assets/img/12_rey-copas.jpg";
                imgCarta.alt="Rey de copas";
                puntuacion += 0.5;
        
                break;

            default:
                imgCarta.src="./assets/img/back.jpg";
                break;
        }

    }
    console.log(`Puntuacion total:${puntuacion}`);
    muestraPuntuacion();
}


//botón para pedir nueva carta


const botonDameCarta = document.getElementById("pideCarta") as HTMLButtonElement;
if (botonDameCarta != null && botonDameCarta != undefined){
    botonDameCarta.addEventListener("click", () => {
        dameCarta();
        mostrarCarta(carta);
        muestraPuntuacion();
        mePlanto.disabled = false;
        getPuntuacion();
        if (puntuacion > 7.5) {
            mensaje = `"GAME OVER"`;
            if (mensajeContainer instanceof HTMLDivElement) {
                mensajeContainer.style.display = "flex";
                mensajeContainer.innerHTML = mensaje;
            }
            botonDameCarta.disabled = true;
            mePlanto.disabled = true;
        }
        if (puntuacion === 7.5) {
            mensaje = `"¡Lo has clavado! ¡Enhorabuena!"`;
            if (mensajeContainer instanceof HTMLDivElement) {
                mensajeContainer.style.display = "flex";
                mensajeContainer.innerHTML = mensaje;
            }
            botonDameCarta.disabled = true;
            mePlanto.disabled = true;
        }
});
}


// me planto


if (mePlanto instanceof HTMLElement && botonDameCarta && queHabriaPasado) {
    mePlanto.addEventListener("click", () => {
        botonDameCarta.disabled = true;
        botonDameCarta.style.display = "none";
        queHabriaPasado.disabled = false;
        mePlanto.disabled = true;
        mePlanto.style.display = "none";

        if (puntuacion < 4) {
            mensaje = `"Has sido muy conservador"`;
        }   else if (puntuacion >= 4 && puntuacion < 5) {
                mensaje = `"Te ha entrado el canguelo eh?"`;
        } else if (puntuacion >= 5 && puntuacion <= 7) {
            mensaje = `"Casi casi..."`;
        } else if (puntuacion === 7.5) {
            mensaje = `"¡Lo has clavado! ¡Enhorabuena!"`;
        } 
        
        if (mensajeContainer instanceof HTMLDivElement) {
            mensajeContainer.style.display = "flex";
            mensajeContainer.innerHTML = mensaje;
        }

        if (queHabriaPasado != null && queHabriaPasado != undefined && queHabriaPasado instanceof HTMLButtonElement){
            queHabriaPasado.style.display = "flex";
            queHabriaPasado.addEventListener("click", () => {
                dameCarta();
                mostrarCarta(carta);
                muestraPuntuacion();
                queHabriaPasado.disabled = true;

                if (puntuacion <= 7) {
                    mensaje = `"Te habrías quedado igual"`;
                } else if (puntuacion === 7.5) {
                    mensaje = `"Ohhhh... una carta más y habrías ganado"`;
                } else if (puntuacion > 7.5){
                    mensaje = `"¡Buena decisión! Te habrías pasado de 7.5"`;
                }
                if (mensajeContainer instanceof HTMLDivElement) {
                    mensajeContainer.style.display = "flex";
                    mensajeContainer.innerHTML = mensaje;
                }
        });
    } 

    });
}


//nueva partida


const nuevaPartida = document.getElementById("nuevaPartida");

if (nuevaPartida != null && nuevaPartida != undefined && botonDameCarta != null && botonDameCarta != undefined){
    nuevaPartida.addEventListener("click", () => {
        const imgCarta = document.getElementById("nuevaCarta"); 

        if (imgCarta instanceof HTMLImageElement && botonDameCarta && queHabriaPasado) {

                imgCarta.src="./assets/img/back.jpg";
                puntuacion = 0;
                muestraPuntuacion();
                botonDameCarta.disabled = false;
                queHabriaPasado.disabled = true;
                queHabriaPasado.style.display = "none";
                botonDameCarta.style.display = "inline-block";
                mePlanto.style.display = "inline-block";
                mensaje = "";
                if (mensajeContainer instanceof HTMLDivElement) {
                    mensajeContainer.style.display = "flex";
                    mensajeContainer.innerHTML = mensaje;
                }
                
            }
    });
}