import { partida } from "./modelo";
import { comprobarPartida, generaCarta, obtenerPuntos } from "./motor";
import { vi } from "vitest";

describe("comprobarPartida", () => {
  it("Devolver Partida ganada si la puntuación es igual a 7.5", () => {
    //Arrange or Given
    const resultadoEsperado: string = "Partida ganada";
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7.5);
    //Act or When
    const resultado = comprobarPartida();
    //Assert or Then
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Devolver Partida en curso si la puntuación es menor que 7.5", () => {
    //Arrange or Given
    const resultadoEsperado: string = "Partida en curso";
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(5);
    //Act or When
    const resultado = comprobarPartida();
    //Assert or Then
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Devolver perdida en curso si la puntuación es mayor que 7.5", () => {
    //Arrange or Given
    const resultadoEsperado: string = "Partida perdida";
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(9);
    //Act or When
    const resultado = comprobarPartida();
    //Assert or Then
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("generarCarta", () => {
  it("Si el número aleatorio es menor o igual que 7, debe devolver ese número", () => {
    //Arrange or Given
    const resultadoEsperado: number = 5;
    const numero: number = 5;
    //Act or When
    const resultado = generaCarta(numero);
    //Assert or Then
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Si el número aleatorio es mayor que 7, debe devolver un valor que sea ese número + 2", () => {
    //Arrange or Given
    const resultadoEsperado: number = 11;
    const numero: number = 9;

    //Act or When
    const resultado = generaCarta(numero);
    //Assert or Then
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("obtenerPuntos", () => {
  //comprobar la puntuación de las cartas
  it("Si el valor de la carta es menor o igual que 7, debe devolver ese número", () => {
    //Arrange or Given
    const resultadoEsperado: number = 4;
    const carta: number = 4;
    //vi.spyOn(generaNumeroAleatorio()).mockReturnValue(9);
    //Act or When
    const resultado = obtenerPuntos(carta);
    //Assert or Then
    expect(resultado).toBe(resultadoEsperado);
  });
  it("Si el valor de la carta es mayor que 7, debe devolver 0.5", () => {
    //Arrange or Given
    const resultadoEsperado: number = 0.5;
    const carta: number = 12;
    //vi.spyOn(generaNumeroAleatorio()).mockReturnValue(9);
    //Act or When
    const resultado = obtenerPuntos(carta);
    //Assert or Then
    expect(resultado).toBe(resultadoEsperado);
  });
});
