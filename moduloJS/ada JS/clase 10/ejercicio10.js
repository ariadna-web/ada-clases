//calculo de descuento
const prompt = require("prompt-sync")({ sigint: true });

let precioOriginal = parseFloat(prompt("Ingresa el precio original del producto:"));
let porcentajeDescuento = parseFloat(prompt("Ingresa el porcentaje de descuento:"));
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
let precioFinal = precioOriginal - montoDescuento;
console.log(`El precio final después del descuento es: $${precioFinal.toFixed(2)}`);