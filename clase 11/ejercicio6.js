// la tabla de multiplicar
const prompt = require("prompt-sync")({ sigint: true });

let numero = parseInt(prompt("ingresa tu numero: "));

console.log(` aqui tienes la tabla del 1 al 10 del numero ${numero} : `);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}