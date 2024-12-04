// semaforo
const prompt = require("prompt-sync")({ sigint: true });

let color = prompt("ingresa el color del semaforo: ");
let verde = prompt("el semaforo esta en verde avance.");
let amarillo = prompt("el semaforo esta en amarillo, vaya con cuidado.");
let rojo = prompt("el semaforo esta en rojo, detengase");

switch (color) {
    case verde:
        console.log("el semaforo esta en verde avance.");
        break;
    case amarillo:
        ("el semaforo esta en amarillo, vaya con cuidado.");
        break;
    case rojo:
        ("el semaforo esta en rojo, detengase")
        break;

}