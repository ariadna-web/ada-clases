// bucle for
const prompt = require("prompt-sync")({ sigint: true });

let numero = parseInt(prompt("ingresa un numero positivo: "));

if (numero > 0) {
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
} else {
    console.log("el numero ingresado es negativo.")
}
