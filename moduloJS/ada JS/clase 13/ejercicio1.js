//area de un triangulo
const prompt = require("prompt-sync")({ sigint: true });

let base = parseFloat(prompt("ingresa la base: "));
let altura = parseFloat(prompt("ingresa la altura: "));

function calcularAreaTtriangulo(base, altura) {
    let area = (base * altura) / 2;
    return area;
}
console.log("El area del triangulo es: ", calcularAreaTtriangulo(base, altura));