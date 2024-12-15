// de entrevista, de grados celsius a fahrenheit
const prompt = require("prompt-sync")({ sigint: true });

const convertirCelsiusAFahrenheit = function (celsius) {
    return (celsius * 9 / 5) + 32;
};

let temperaturaCelsius = parseFloat(prompt("ingresa la temperatura en grados celsius: "));
let temperaturaFahrenheit = convertirCelsiusAFahrenheit(temperaturaCelsius);

console.log(`La temperatura en Fahrenheit es: ${temperaturaFahrenheit.toFixed(2)}°F`);