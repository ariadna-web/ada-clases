/*: Convertir una lista de palabras en una frase
Tienes un array de palabras ["JavaScript", "es", "divertido"]. Une todas las
palabras en una sola frase, separadas por un espacio, y muestra el
resultado.*/
const prompt = require("prompt-sync")({ sigint: true });
let palabras = ['el', 'auto', 'se', 'cayo', 'al', 'rio'];
let espacio = palabras.join(' ');
console.log(espacio);
