/*Objetivo: Crear un cliente TCP que se conecte a un servidor, pero si la
conexión se pierde, debe intentarlo nuevamente cada 3 segundos.
 El cliente debe:
 Conectarse al servidor en el puerto 5000.
 Enviar un mensaje inicial: "¡Hola, servidor!".
 Escuchar el evento 'close' y volver a conectarse tras 3 segundos.
 Escuchar y manejar 'error', mostrando el mensaje en consola. */
const net = require('net');
const HOST = 'localhost'
const PORT = 5000;


const client = net.createConnection({ port: PORT, host: HOST }, () => {
    client.write('hola servidor')
})
client.on('connect', () => {
    console.log('conectando al servidor')
})
client.on('close', () => {
    console.log('cerrando la coneccion')
    setTimeout(() => {
        console.log('reconectando')
        client.on({ port: PORT, host: HOST })
    }, 3000)
});
client.on('error', (err) => {
    console.log('error', err.message)
})