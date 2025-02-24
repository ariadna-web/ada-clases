const net = require('net')
const path = require('path')

const client = net.createConnection({ port: 8081 }, () => {
    console.log('conectado al servidor')

    client.write('./docs/../file.txt'); // Ruta con barras redundantes y puntos
    client.write('docs/./file.txt')
})
client.on('data', (data) => {
    console.log('ruta normalizada')
    client.end()
})
client.on('end', () => {
    console.log('desconectado')
})