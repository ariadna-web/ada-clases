// nombre igual
const prompt = require("prompt-sync")({ sigint: true });
let nombre = prompt("ingresa tu nombre: ");
if (nombre === "ari") {
    console.log(`hola ${nombre} nos llamamos igual`);
} else {
    console.log(`hola ${nombre}, mi nombre es mas bonito`)
}