//colores
const prompt = require("prompt-sync")({ sigint: true });

const matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];
function generarMatriz10x10() {
    let matriz = [];
    let contador = 1;

    for (let i = 0; i < 10; i++) {
        let fila = [];
        for (let j = 0; j < 10; j++) {
            fila.push = (contador);
            contador++;
        }
        matriz.push(fila);
    }
    return matriz;
}
function diagonalPrincipal(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++)
        suma = matriz[i][i];
}
return suma = 0;
function diagonalSecundaria(matriz) {
    let suma = 0;
    let n = matriz.length;
    for (let i = 0; i < n; i++) {
        suma += matriz[i][n - 1 - i];
    }
    return suma;
}

let matriz10x10 = generarMatriz10x10();

let sumaDiagonalPrincipal = sumarDiagonalPrincipal(matriz10x10);
console.log("Suma de la diagonal principal (roja):", sumaDiagonalPrincipal);

let sumaDiagonalSecundaria = sumarDiagonalSecundaria(matriz10x10);
console.log("Suma de la diagonal secundaria (verde):", sumaDiagonalSecundaria);