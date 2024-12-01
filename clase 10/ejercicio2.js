//datos del usuario
const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("cual es tu nombre? ");
let edad = parseFloat(prompt("que edad tienes? "));
let peso = parseFloat(prompt("cuantos kilitos tenes? "));

console.log(`holis ${nombre}, increible tienes ${edad} años, veo que tienes ${peso} kilitos de amor para dar.`);