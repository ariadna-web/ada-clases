/* Buscar la posición de un elemento
Tienes una lista de colores ["Rojo", "Verde", "Azul", "Amarillo"]. Encuentra y
muestra el índice del color "Azul" en la lista.*/
const prompt = require("prompt-sync")({ sigint: true });

let colores = ["Rojo", "Verde", "Azul", "Amarillo"];
let blue = colores.indexOf("Azul");
console.log("el color esta en la posicion", +blue);
