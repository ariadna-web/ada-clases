//clasificacion de edad
const prompt = require("prompt-sync")({ sigint: true });

let edad = parseFloat(prompt("ingresa tu edad: "));

let clasificacionDeEdad = (edad) => {
    if (edad < 15) {
        return ("eres muy joven");

    } else if (edad < 30) {
        return ("estas en la onda");

    } else if (edad < 50) {
        return ("ya diste muchas vueltas  al sol");

    } else {
        return ("eres abuelito");

    }
}
console.log(clasificacionDeEdad(edad));
