//adivina el numero
const prompt = require("prompt-sync")({ sigint: true });

let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let intentos = 3; // Número máximo de intentos

for (let i = 0; i < intentos; i++) {
    let numeroUsuario = prompt("Intenta adivinar el número secreto (entre 1 y 100): ");
    numeroUsuario = parseInt(numeroUsuario);

    if (numeroUsuario === numeroSecreto) {
        console.log("¡Felicidades! Has adivinado el número secreto en " + (i + 1) + " intentos.");
        break;
    } else if (numeroUsuario < numeroSecreto) {
        console.log("El número secreto es mayor que " + numeroUsuario);
    } else {
        console.log("El número secreto es menor que " + numeroUsuario);
    }

    if (i === intentos - 1) { // Verifica si ya es el último intento
        console.log("Lo siento, no has adivinado el número secreto en " + intentos + " intentos. El número secreto era " + numeroSecreto);
    }
}