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
});