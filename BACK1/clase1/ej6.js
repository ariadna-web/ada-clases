/*Escribe una función que reciba un array de números y devuelva el
promedio.
Consigna:
• Usa un bucle for para sumar los números.
• Divide la suma total entre la cantidad de elementos del array.*/



function calcularPromedio(arreglo) {
    return arreglo.reduce((a, b) => a + b, 0) / arreglo.length;
}

let numeros = [1, 2, 3, 4, 5];
let promedio = calcularPromedio(numeros);
console.log("El promedio es: " + promedio);