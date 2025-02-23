const net = require('net')
const server = net.createServer()

server.on('connection', (Socket) => {
    Socket.on('data', (data) => {
        console.log('\nCliente conectado' + Socket.remoteAddress + Socket.remotePort + 'dice ' + data)
        Socket.write('su mensaje fue recibido!')
    })
    Socket.on('close', () => {
        console.log('comunicacion finalizada')
    })
    Socket.on('error', (err) => {
        console.log(err.message)
    })
})
server.listen(5000, () => {
    console.log('el servidor esta escuchando en el puerto: ', server.address().port)
})