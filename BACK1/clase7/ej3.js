const { Socket } = require('dgram')
const net = require('net')

const server = net.createServer((Socket) => {
    console.log('un cliente se conecto')
    Socket.on('data', (data) => {
        const dataTostring = data.toString()
        if (dataTostring === 'hola') {
            console.log(`bienvenido`)
            Socket.write(`bienvenido`)
        } else if (dataTostring === 'adios') {
            Socket.end()
        } else {
            Socket.write(`mensaje recibido`)
        }
    })
})
server.on('connection', (Socket) => {
    console.log('coneccion establecida')
})
const PORT = 5000
server.listen(PORT, () =>
    console.log(`el servidor esta escuchando en el puerto ${PORT}`))
