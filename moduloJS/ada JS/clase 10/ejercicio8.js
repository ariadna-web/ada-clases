// conversion de temperaturas
const prompt = require("prompt-sync")({ sigint: true });

let celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
let fahrenheit = celsius * 9 / 5 + 32;
console.log(`${celsius}°C equivale a ${fahrenheit}°F.`);
