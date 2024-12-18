
const prompt = require("prompt-sync")({ sigint: true });
let floresFavoritas = [0];

let flor1 = prompt("cual es tu primera flor favorita? ");
floresFavoritas[0] = flor1;
let flor2 = prompt("cual es tu segunda flor favorita? ");
floresFavoritas[1] = flor2;
let flor3 = prompt("cual es tu tercera flor favorita? ");
floresFavoritas[2] = flor3;

let florEspecifica = prompt("cual es la flor que buscas?");
let contador = 0;

for (let i = 0; i < floresFavoritas.length; i++) {
    if (floresFavoritas[i] === florEspecifica) {
        contador++;
    }
}

if (contador > 0) {
    console.log(`la flor${florEspecifica} se encontro ${contador} veces en el array.`);
} else {
    console.log(`la flor ${florEspecifica} no se encuentra en el array.`)
}