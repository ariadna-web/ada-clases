//rangom maximo y minimo
const prompt = require("prompt-sync")({ sigint: true });
const rango_minimo = 10;
const rango_maximo = 100;
let numero = parseFloat(prompt("ingresa tu numero: "));
if (numero >= rango_minimo && numero <= rango_maximo) {
    console.log(`el numero ${numero} esta dentro del rango${rango_minimo}-${rango_maximo}`);
} else {
    console.log(`el numero${numero} esta fuera del rango ${rango_minimo}-${rango_maximo}`);
}
