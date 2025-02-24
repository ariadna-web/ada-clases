//declarando 4 variables
const prompt = require("prompt-sync")({ sigint: true });

let verdadero = true;
let texto = "solo soy un pequeño texto";
let numero = 4567;
let nada = null;

let resultado = numero + 3456;
let mensaje = texto + " que existe en este unico plano digital";
if (verdadero) {
    console.log("la variable " + verdadero + " es verdad");
}
console.log(`el resultado de la operacion matematica es ` + resultado);
console.log(mensaje);