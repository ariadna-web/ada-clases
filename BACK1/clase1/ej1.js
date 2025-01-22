const prompt = require("prompt-sync")({ sigint: true });

let edades = [10, 15, 35, 65, 12, 59];
let suma = 0;

function entrada(edades) {
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 12 && edades[i] < 60) {
            suma++
        }
    } return suma
} console.log(entrada(edades));