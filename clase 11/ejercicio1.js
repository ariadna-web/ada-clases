// positivo, negativo o cero?
const prompt = require("prompt-sync")({ sigint: true });

let numero = prompt("ingresa un numero: ");

if (numero > 0) {
    console.log(`${numero} es un numero positivo.`);
} else if (numero == 0) {
    console.log(`el numero es 0.`);
} else {
    console.log(`el numero ${numero} es negativo.`);
}