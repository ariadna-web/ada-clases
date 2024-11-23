//tipos de triangulos
const prompt = require("prompt-sync")({ sigint: true });

let lado1 = parseFloat(prompt("ingresa la medida del primer lado: "));
let lado2 = parseFloat(prompt("ingresa la medida del segundo lado: "));
let lado3 = parseFloat(prompt("ingresa la medida del tercer lado: "));

if (lado1 === lado2 && lado2 === lado3) {
    console.log("el triangulo es equilatero");
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log("el triangulo es isosceles");
} else {
    console.log("el triangulo es escaleno");
}