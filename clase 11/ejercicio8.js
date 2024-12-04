// multiplos del 1 al 100
const prompt = require("prompt-sync")({ sigint: true });

let numero = parseInt(prompt("Por favor, escribe un número positivo:"));

if (numero > 0) {
    console.log(`Los múltiplos de ${numero} del 1 al 100 son: `);
    for (let i = 1; i <= 100; i++) {
        if (i % numero === 0) {
            console.log(i);
        }
    }
} else {
    console.log("El número ingresado no es positivo. Inténtalo de nuevo.");
}