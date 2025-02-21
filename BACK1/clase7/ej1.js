
const net = require('net')

const server = net.createServer((Socket) => {
    console.log('un cliente se ha conectado');

    Socket.on('data', (data) => {
        console.log(`datos recibidos del cliente ${data.toString()}`)
        Socket.write('mensaje recibido por el servidor');
    })
    Socket.on('end', () => {
        console.log('el cliente cerro la coneccion')
    })
    Socket.on('close', () => {
        console.log('la coneccion del cliente se ha cerrado')
    })
})
server.on('connection', (Socket) => {
    console.log('nueva coneccion establecida')
})
const PORT = 3000
server.listen(PORT, () => {
    console.log(`el servidor esta escuchando desde el puerto ${PORT}`)
})