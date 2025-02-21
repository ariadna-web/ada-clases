
const net = require('net');
//1-2
const server = net.createServer((socket) => {
    console.log('un cliente se ha conectado.');
    //3
    socket.on('data', (data) => {
        console.log(`datos recibidos ${data.toString()}`);
    })
    //4
    socket.write('hola cliente!Tu mensaje fue recibido correctamente.')

    //5
    socket.on('end', () => {
        console.log(`cliente desconectado`)
    })
});
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`);
});



