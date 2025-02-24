//calcular descuentos
const prompt = require("prompt-sync")({ sigint: true });

let productosComprados = parseFloat(prompt("ingresa la cantidad de productos: "));
let precioIndividual = parseFloat(prompt("ingresa el precio unitario: "));
let total = (precioIndividual * productosComprados) - descuento;

let calcularDescuento = (productosComprados, precioIndividual) => {
    let descuento = 0;
    if (productosComprados < 10) {
        descuento = 0, 25;
    }
    else if (productosComprados < 20) {
        descuento = 0, 50;
    } else {
        descuento = 1;
    }
}
console.log(total)