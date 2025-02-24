//producto mas iva
const prompt = require("prompt-sync")({ sigint: true });

let precio = parseFloat(prompt("ingresa el precio de tu producto: "));
let iva = parseFloat(prompt(" ingresa el iva qie corresponde al producto: "));

const calcularElPrecioFinal = (precio, iva) => {
    let calcularIva = (precio * iva) / 100;
    let precioFinal = precio + calcularIva;
    return precioFinal;
}
console.log(calcularElPrecioFinal(precio, iva));