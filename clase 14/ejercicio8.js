//Funcion backend
const prompt = require("prompt-sync")({ sigint: true });

let num1 = parseFloat(prompt("ingresa el primer numero: "));
let num2 = parseFloat(prompt("ingresa el segundo numero: "));


function backEnd(num1, num2) {
    for (let i = 1; i <= 100; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            console.log("backEnd");
        } else if (i % num1 === 0) {
            console.log("back");
        } else if (i % num2 === 0) {
            console.log("end");
        } else {
            console.log(i)
        }
    }
}
backEnd(num1, num2);