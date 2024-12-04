//operacion matematica

const prompt = require("prompt-sync")();

let numero1 = parseFloat(prompt("Ingresa el primer número: "));
let numero2 = parseFloat(prompt("Ingresa el segundo número: "));
let operacion = prompt("Elige tu operación (suma, resta, multiplicacion, division): ").toLowerCase();

let resultado;

switch (operacion) {
    case "suma":
        resultado = numero1 + numero2;
        console.log(`El resultado de la suma es: ${resultado}`);
        break;
    case "resta":
        resultado = numero1 - numero2;
        console.log(`El resultado de la resta es: ${resultado}`);
        break;
    case "multiplicacion":
        resultado = numero1 * numero2;
        console.log(`El resultado de la multiplicación es: ${resultado}`);
        break;
    case "division":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log(`El resultado de la división es: ${resultado}`);
        } else {
            console.log("Error: No se puede dividir entre cero.");
        }
        break;
    default:
        console.log("Operación inválida. Por favor, ingresa una operación válida.");
}