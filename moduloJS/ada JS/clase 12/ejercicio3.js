
const prompt = require("prompt-sync")({ sigint: true });

let numero = parseInt(prompt("ingresa un numero: "));

if (numero != null) {
    let impares = [];
    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            impares.push(i);
        }
    }
    console.log(`los numeros impares hasta el ${numero} son ${impares}.`)
}