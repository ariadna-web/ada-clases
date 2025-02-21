const { read } = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let suma = 0;
rl.question('ingrese el primer numero: ', (num1) => {
    rl.question('ingresa el segundo numero: ', (num2) => {
        const suma = parseFloat(num1) + parseFloat(num2)
        console.log(`el resultado de sumar${num1} y ${num2} es ${suma}`)
        rl.close()
    });


    rl.on('close', () => {
        console.log('gracias por sumar conmigo <3')
        process.exit(0)
    });
})