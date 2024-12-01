// comparadores y operaciones logicos
const prompt = require("prompt-sync")({ sigint: true });

let numero1 = 15;
let numero2 = 20;
let resultado = numero1 > 10 && numero2 > 10;
console.log("¿Ambos números son mayores que 10?", resultado);