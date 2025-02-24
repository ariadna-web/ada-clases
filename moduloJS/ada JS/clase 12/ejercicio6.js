// mayores que 10, menores que 100
const prompt = require("prompt-sync")({ sigint: true });

let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];
let suma = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {

        let valor = matriz[i][j];

        if (valor >= 10 && valor <= 100) {
            suma += valor
        }
    }
}
console.log(`la suma de los valores es ${suma}`)