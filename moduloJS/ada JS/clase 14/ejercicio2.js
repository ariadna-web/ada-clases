//calificaciones
const prompt = require("prompt-sync")({ sigint: true });

let calificacion1 = parseFloat(prompt("ingresa tu perimera calificacion: "));
let calificacion2 = parseFloat(prompt("ingresa tu segunda calificacion : "));
let calificacion3 = parseFloat(prompt("ingresa tu tercera calificacion : "));
let calificacion4 = parseFloat(prompt("ingresa tu cuarta calificacion  : "));
let calificacion5 = parseFloat(prompt("ingresa tu quinta calificacion  : "));


const calcularPromedioFinal = (calificacion1, calificacion2, calificacion3, calificacion4, calificacion5) => {
    let total = calificacion1 + calificacion2 + calificacion3 + calificacion4 + calificacion5
    let promedio = total / 5;
    return promedio;
}
console.log(calcularPromedioFinal(calificacion1, calificacion2, calificacion3, calificacion4, calificacion5));
