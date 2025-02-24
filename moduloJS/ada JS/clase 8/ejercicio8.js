const prompt = require("prompt-sync")({ sigint: true });
//paso 1
let numero1 = prompt("ingresa tu numerito para saber el doble: ");
let doble = numero1 * 2;
console.log(`el doble del numero ${numero1} es ${doble}`);

//ejercicio 2

let numero2 = parseFloat(
  prompt("ingresa tu numerito para saber si es positivo, negativo o 0: ")
);
if (numero2 > 0) {
  console.log("el numerito es positivo.");
} else if (numero2 < 0) {
  console.log("el numerito es negativo.");
} else {
  console.log("el numero es 0.");
}
//ejercicio 3
let numero3 = parseFloat(prompt("ingresa tu primer numerito para sumar: "));
let numero4 = parseFloat(prompt("ingresa tu segundo numerito para sumar: "));
let suma = numero3 + numero4;
console.log(`la suma de tus numeritos es ${suma}`);
//ejercicio 4
let numero5 = parseFloat(
  prompt("ingresa un numerito entero para saber si es par: ")
);
if (numero5 % 2 === 0) {
  console.log(`el numerito ${numero5} es par.`);
} else {
  console.log(`el numerito ${numero5} es impar.`);
}

// ejercicio 5
let nombre = prompt("dime tu nombre porfavor: ");
console.log(`hola ${nombre} es un gusto!!`);


