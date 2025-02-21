const { Socket } = require('dgram')
const net = require('net')

const server = net.createServer((Socket) => {
    console.log('un cliente se ha conectado')
    Socket.on('error', (err) => {
        console.error('hay un error')
        Socket.destroy()
    })
})
server.listen(3000, () => {
    console.log('error resuelto')
})

