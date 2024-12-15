// contar hasta el numero
const prompt = require("prompt-sync")({ sigint: true });

function contarHasta() {
    let numero = parseInt(prompt("ingresa tu numero: "));
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}
contarHasta();