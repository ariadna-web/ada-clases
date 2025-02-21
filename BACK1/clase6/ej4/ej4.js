const { read } = require('fs')
const readline = require('readline')
require('dotenv').config()
const defaultMessage = process.env.START_MESSAGE || 'Bienvenidos a la dimension desconocida del backend '

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('cual es tu nombre? ', (nombre) => {
    console.log(`nos vemos en otro momento ${nombre}`)
    rl.close()
});
rl.on('close', () => {

    process.exit(0)
});