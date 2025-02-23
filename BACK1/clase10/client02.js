const net = require('net')
const readline = require('readline-sync')
const options = {
    port: 5000,
    host: '127.0.0.1'
}
const client = net.createConnection(options)
client.on('connect', () => {
    console.log('conexion exitosa')
    sendLine()
})
client.on('data', (data) => {
    console.log('el servidor dice: ' + data)
    sendLine()
})
client.on('error', (err) => {
    console.log(err.message)
})
function sendLine() {
    let line = readline.question('\ndigita alguna cosa\t')
    if (line == "0") {
        client.end()
    } else {
        client.write(line)
    }
} 