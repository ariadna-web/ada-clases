const { Socket } = require('dgram');
const net = require('net');

//2: crear un servidor TCP
const server = net.createServer((Socket) => {
    console.log('cliente conectado');

    //manejar los datos recibidos del cliente
    Socket.on('data', (data) => {
        console.log('datos recibidos: ', data.toString());
    });
    //manejar el cierre de la coneccion
    Socket.on('end', () => {
        console.log('cliente desconectado ')
    });
    //enviar un mensaje al cliente
    Socket.write('hola cliente!');
});
//3: definimos el puerto en el que el servidor escucha conecciones
const PORT = 4000;
//el servidor escucha en el puerto 4000
server.listen(PORT, () => {
    //mostramos un mensaje por consola indicando que el servidor esta listo
    console.log(`servidor TCP escuchando en el puerto ${PORT}`);
}); 