//numero mayor y menor

const prompt = require("prompt-sync")({ sigint: true });
let numero1 = parseFloat(prompt("ingresa el primer numero: "));
let numero2 = parseFloat(prompt("ingresa el segundo numero: "));
if (numero1 > numero2) {
    console.log(`el numero ${numero1} es mayor`)
} else if (numero1 < numero2) {
    console.log(`el numero ${numero2} es mayor`)
}
else {
    console.log("los numeros son iguales")
}