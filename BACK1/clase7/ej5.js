/*Crea un servidor TCP que lleve un contador de cuántos clientes se han
conectado. Cada vez que un nuevo cliente se conecta, el servidor debe
enviarle un mensaje indicando cuántos clientes se han conectado hasta
ese momento. Cuando un cliente se desconecta, el servidor debe reducir
el contador.
Requisitos:
• Usa una variable global para mantener el contador de conexiones.
• Usa el evento connection para incrementar el contador y enviar el
mensaje al cliente.
• Usa el evento close para reducir el contador cuando un cliente se
desconecta.
 */
const net = require('net')
let connectionCount = 0; //contador de conecciones
const server = net.createServer((Socket) => {
    connectionCount++; //incrementa el contador
    console.log(`nuevo cliente conectado. total de clientes conectados: ${connectionCount}`)
    //envia el numero de conecciones al cliente
    Socket.write(`bienvenido. eres el cliente numero${connectionCount}.\n`)
    //evento close: reduce elñ contador cuando un cliente se desconecta
    Socket.on('close', () => {
        connectionCount--;
        console.log(`cliente desconectado. total de conecciones${connectionCount}`)
    })
})
server.listen(3000, () => {
    console.log('servidor escuchando en el puerto 3000')
})
/*server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000.');
});
 */