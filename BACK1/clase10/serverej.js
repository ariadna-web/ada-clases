

const { Socket } = require('dgram')
const net = require('net')

const server = net.createServer()

server.on('connection', (Socket) => {
    Socket.on('data', (data) => {
        console.log('\nEl cliente ' + Socket.remoteAddress/*direccion del cliente */ + Socket.remotePort /*el púerto */ + "dice: " + data)
        //confirmacion de recepcion de datos
        Socket.write('mensaje del cliente recibido ')
    });

    Socket.on('close', () => {
        console.log('comunicacion finalizada')
    });
    Socket.on('error', (err) => {
        console.log(err.message)
    });
});
server.listen(4000, () => {
    console.log('servidor escuchando desde el puerto: ', server.address().port)
})