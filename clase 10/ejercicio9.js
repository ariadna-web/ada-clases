//calculo del ims
const prompt = require("prompt-sync")({ sigint: true });

let peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
let altura = parseFloat(prompt("Ingresa tu altura en metros:"));
let imc = peso / (altura * altura);
console.log(`Tu Índice de Masa Corporal (IMC) es: ${imc.toFixed(2)}`);