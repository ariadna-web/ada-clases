// par o impar
const prompt = require("prompt-sync")({ sigint: true });

let numero = parseInt(prompt("ingresa tu numero: "));

if (numero % 2 == 0) {
    console.log(`el numero ${numero} es par`);
} else {
    console.log(`el numero ${numero} es impar.`)
}