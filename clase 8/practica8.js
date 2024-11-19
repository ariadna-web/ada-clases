const prompt = require("prompt-sync")({ sigint: true });
let nombre = prompt("escribe tu nombre: ");
console.log(`hola ${nombre}`);
