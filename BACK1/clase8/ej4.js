const net = require('net');
const client = net.createConnection({ port: 5000, host: 'localhost' });

client.on('connect', () => {
    console.log('✅ Conectado al servidor');
    client.write('¡Hola, servidor!');
});

client.on('data', (data) => {
    console.log('📩 Datos recibidos:', data.toString());
    client.setTimeout(5000, () => {
        console.log('tiempo de espera agotado')
        client.end()
    })
    setTimeout(() => {
        console.log('pausando la recepcion de datos')
        client.pause()

        setTimeout(() => {
            console.log('reanudaando la recepcion de datos')
            client.resume('reanudando la recepcio de datos')

        }, 3000)
    }, 3000)
});
client.on('error', (err) => {
    console.error('Error: ', err.message)
})
client.on('close', () => {
    console.log('coneccion cerrada')
})