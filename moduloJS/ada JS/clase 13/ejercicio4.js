// es par o impar
const prompt = require("prompt-sync")({ sigint: true });

let numero = parseFloat(prompt("ingresa el numero: "))
function esPar(numero) {
    if (numero % 2 === 0) {
        return `numero par`;
    } else {
        return `numero impar`;
    }
}
console.log(esPar(numero));