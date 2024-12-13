//ingresa numeros positivos
const prompt = require("prompt-sync")({ sigint: true });

let suma = 0;
let numero;

while (true) {
    numero = parseFloat(prompt("ingresa un numero positivo (o uno negativo para terminar): "));
    if (numero <= 0) {
        break;
    }
    suma += numero;
}
console.log("la suma de todos los numeros positivos es: " + suma);