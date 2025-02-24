const net = require('net')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function mensaje() {
    readline.question('Escribe un mensaje: ', (msg) => {
        if (msg === 'salir') {
            client.end();
            readline.close();
        } else {
            client.write(msg);
            enviar();
        }
    });
}
client.on('connect', enviar);