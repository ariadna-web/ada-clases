//pedir nombres
const prompt = require("prompt-sync")({ sigint: true });

let nombres = [];

for (let i = 0; i < 5; i++) {
    let nombre = prompt(`ingresa el nombre: ${i + 1} `);
    nombres[i] = nombre;
}
let revisarNombre = prompt("ingresa un nombre para buscar: ");

let encontrado = false
for (let i = 0; i < 5; i++) {
    if (nombres[i] === revisarNombre) {
        encontrado = true;
        break;
    }
}
