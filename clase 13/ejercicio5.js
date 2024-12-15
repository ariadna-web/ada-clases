// concatenar para devolver nombre y apellido
const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("ingresa tu nombre: ");
let apellido = prompt("ingresa tu apellido: ");

function nombreCompleto(nombre, apellido) {
    return `hola ${nombre} ${apellido} !!`;
}
console.log(nombreCompleto(nombre, apellido));