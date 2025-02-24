/*: Eliminar espacios innecesarios
Tienes la siguiente cadena con espacios adicionales
" Hola, mundo! "
Elimina los espacios al inicio y al final y muestra la cadena resultante. */
const prompt = require("prompt-sync")({ sigint: true });
let saludo = " ¡ hola  mundo !"
let saludar = saludo.trim();
console.log(saludar)
