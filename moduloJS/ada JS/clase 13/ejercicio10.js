//factorial
const prompt = require("prompt-sync")({ sigint: true });

const calcularFactorial = () => {


    let numero = parseFloat(prompt("ingresa tu numero: "));


    function calcularFactorial() {
        let factorial = parseFloat(prompt("ingresa tu numero: "));
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }
        return factorial;
    }
}
console.log(calcularFactorial(5))