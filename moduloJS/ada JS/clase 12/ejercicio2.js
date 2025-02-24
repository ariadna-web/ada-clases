// numeros impares 
const prompt = require("prompt-sync")({ sigint: true });

let pasword = 1234;

do {
    pasword = prompt("ingresa tu contraseña: ");
} while (pasword !== "1234");
console.log("contraseña correcta.");

