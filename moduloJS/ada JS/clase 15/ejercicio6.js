/*Buscar la última posición de un elemento repetido
Tienes una lista de números [2, 5, 7, 2, 8, 7]. Encuentra y muestra la última
posición en la que aparece el número 7.
 */
const prompt = require("prompt-sync")({ sigint: true });

let numeros = [2, 3, 4, 5, 4, 6, 3];
let ultimo = numeros.lastIndexOf(4);
console.log(ultimo)
