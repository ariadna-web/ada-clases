
const net = require('net')
const path = require('path')

//servidor tcp
const server = net.createServer((Socket) => {
    console.log('cliente conectado.')
    Socket.on('data', (data) => {
        const inputPath = data.toString().trim()
        const isAbsolute = path.isAbsolute(inputPath)

        //respuesta
        const responsive = path.isAbsolute ? 'la ruta es absoluta' : 'la ruta es relativa'
        Socket.write(responsive)
    })
    Socket.on('end', () => {
        console.log('cliente desconectado')
    })
})

server.listen(8080, () => {
    console.log('servidor escuchando en el puerto: ' + server.address().port)
})