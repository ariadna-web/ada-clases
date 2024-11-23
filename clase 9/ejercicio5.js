// que numero es mayor?
const prompt = require("prompt-sync")({ sigint: true });

let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
let numero3 = parseFloat(prompt("Ingresa el tercer número:"));

let numeromayor;

if (numero1 >= numero2 && numero1 >= numero3) {
    numeromayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    numeromayor = numero2;
} else {
    numeromayor = numero3;
}

// Mostrar el resultado
console.log("El número mayor es:", numeromayor);