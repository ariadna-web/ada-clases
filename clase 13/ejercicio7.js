//mensajito de la hora
const prompt = require("prompt-sync")({ sigint: true });

let horaActual = parseFloat(prompt("ingresa la hora (sin minutos) para recibir tu saludito: "));

function mostrarSaludo() {
    if (horaActual < 12) {
        console.log(" hola buenos dias!!");
    }
    else if (horaActual < 18) {
        console.log(" hola buenas tardes!!");
    }
    else {
        console.log(" hola buenas noches!!");
    }
}
mostrarSaludo();