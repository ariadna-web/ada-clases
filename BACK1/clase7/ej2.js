
const net = require('net')

const server = net.createServer((Socket) => {
    console.log('un cliente se conecto al servidor')
    Socket.on('timeout', () => {
        console.log('se alcanzo el tiempo maximo de espera sin recibir datos.')
        Socket.end()
    })
    Socket.setTimeout(10000)
    Socket.on('data', (data) => {
        console.log(`datos del cliente ${data.toString} recibidos correctamente`)
        Socket.setTimeout(10000)
    })
})
server.on('conecction', (Socket) => {
    console.log('nueva coneccion establecida')
})
const PORT = 8000
server.listen(PORT, () => {
    console.log(`el servidor esta escuchando desde el puerto ${PORT}`)
})