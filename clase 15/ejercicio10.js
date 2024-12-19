/*Reemplazar una palabra en una frase
Tienes la frase "Me gusta el invierno". Cambia la palabra "invierno" por
"verano" y muestra la frase actualizada.*/
const prompt = require("prompt-sync")({ sigint: true });

let frase = "me gusta el invierno";
let Reemplazar = frase.replace("invierno", "verano");
console.log(Reemplazar)