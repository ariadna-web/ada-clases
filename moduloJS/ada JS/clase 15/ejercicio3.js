/* Agregar y eliminar a la fila de mascotas
Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato",
"Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el
"Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la
fila y muéstrala. Finalmente, muestra la lista actualizada*/
const prompt = require("prompt-sync")({ sigint: true });

let animales = ["Perro", "Gato", "Conejo"];
animales.unshift('hamster');
console.log(animales);