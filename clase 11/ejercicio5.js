// Encuentra los números pares entre dos valores
const prompt = require("prompt-sync")({ sigint: true });

let inicio = parseFloat(prompt("ingresa el primer numero: "));
let fin = parseFloat(prompt("ingresa el segundo numero: "));

if (inicio > fin) {
    console.log("los valores son invalidos, el primer numero debe ser menor que el segundo");
} else {
    console.log(`numeros pareas entre los numeros ${inicio} y ${fin} : `);
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

