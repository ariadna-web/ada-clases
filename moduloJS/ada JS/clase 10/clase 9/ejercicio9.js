// calculo de medidas del circulo
const prompt = require("prompt-sync")({ sigint: true });
const pi = 3.14159
let radio = parseFloat(prompt("ingresa el radio del circulo: "));
let area = pi * (radio * radio);
let perimetro = 2 * pi * radio;


console.log(`el area del circulo es de ${area}`);
console.log(`el perimetro del circulo es de ${perimetro}`);