//numeros mayores
const prompt = require("prompt-sync")({ sigint: true });

let numero = parseFloat(prompt("ingresa el primer numero: "));
let numero2 = parseFloat(prompt("ingresa el segundo numero: "));

const numeroMayor = function (numero, numero2) {
    if (numero > numero2) {
        return numero;
    } else {
        return numero2;
    }
}
console.log("el numero mayor es: ", numeroMayor(numero, numero2));