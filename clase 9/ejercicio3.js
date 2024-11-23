// Declaracion de las variables
const prompt = require("prompt-sync")({ sigint: true });
let condicion1 = prompt("Ingresa true o false para la primera condición:") === "true";
let condicion2 = prompt("Ingresa true o false para la segunda condición:") === "true";
console.log("Condición 1 AND Condición 2:", condicion1 && condicion2);
console.log("Condición 1 OR Condición 2:", condicion1 || condicion2);
console.log("NOT Condición 1:", !condicion1);
console.log("NOT Condición 2:", !condicion2);