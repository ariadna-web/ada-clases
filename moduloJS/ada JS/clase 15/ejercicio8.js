/*Extraer una parte de una frase
Tienes la frase "Los gatos son geniales". Extrae y muestra solo la parte
"gatos" utilizando el método adecuado. */
const prompt = require("prompt-sync")({ sigint: true });
let frase = 'los gatos son geniales';
console.log(frase.slice(4, 9));
