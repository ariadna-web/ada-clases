//edad minima y maxima
const prompt = require("prompt-sync")({ sigint: true });

const edad_minima = 18;
const edad_maxima = 99;

let edad = parseInt(prompt("ingresa tu edad: "));
if (edad >= edad_minima && edad <= edad_maxima) {
    console.log("estas dentro del rango de edad.");
} else {
    console.log(" estas fuera del rango de edad.");
}