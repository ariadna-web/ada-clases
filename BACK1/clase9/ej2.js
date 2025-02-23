const net = require('net')

const HOST = 'localhost'
const PORT = 5000

const client = net.createConnection({ port: PORT, host: HOST }, () => {
    console.log('conectado')
    client.write('hola')
})

client.on('connect', () => {
    console.log('conectado')
})
client.on('data', (data) => {
    console.log('mensaje del servidor', data.toString)
})
setTimeout(() => {
    console.log('se pauso la coneccion')
    client.pause()
}, 3000)
setTimeout(() => {
    client.resume()
    console.log('se reanudo la coneccion')
}, 5000)
setTimeout(() => {
    console.log('se pauso la coneccion')
    client.pause()
}, 8000)
setTimeout(() => {
    client.resume()
    console.log('se reanudo la coneccion')
}, 15000)
client.on('error', (err) => {
    console.log('error: ', err.message)
})