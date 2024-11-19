
const prompt = require("prompt-sync")({ sigint: true });
const name = prompt("¿Cuál es tu nombre? ");
console.log(`Hola, ${nombre}`);
