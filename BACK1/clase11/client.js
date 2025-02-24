
const net = require('net')
const path = require('path')

const client = net.createConnection({ port: 8080 }, () => {
    console.log('conectado al servidor')
    client.write('/home/user/documento.txt')//ruta absoluta
    client.write('documento.txt')//rutaa relativa
    client.write('/home/usuarios/file.txt') //ruta absoluta
})
client.on('data', (data) => {
    console.log(data.toString())
    client.end()
})
client.on('end', () => {
    console.log('desconectado')
})