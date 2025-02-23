/*Objetivo: Implementar un timeout que cierre la conexión si no recibe
datos en 10 segundos.
 El cliente debe:
 Conectarse y enviar un mensaje inicial.
 Configurar un setTimeout() de 10 segundos para cerrar la conexión si
no recibe datos.
 Escuchar el evento 'data' y cancelar el timeout si recibe información.
 Si no recibe datos en 10 segundos, usar client.destroy() y mostrar un
mensaje en consola. */

const net = require('net')

const HOST = 'localhost'
const PORT = 5000

const client = net.createConnection({ port: PORT, host: HOST }, () => {
    console.log('conectado')
})
let timeout;
client.on('data', (data) => {
    console.log('servidor: ', data.toString)
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        console.log('no hay datos')
        client.end()
    }, 10000)

})
client.on('error', (err) => {
    console.error('error en la conexion', err.message)
    client.end()
})