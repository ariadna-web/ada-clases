//paso 1: importar el modulo net
const { time, log, Console } = require('console')
const { TIMEOUT } = require('dns')
const net = require('net')

//paso 2: configuracion de la coneccion
const PORT = 5000
const HOST = 'localhost'

//paso 3: creamos la coneccion al servidor usando net.createConeccion 
const client = net.createConnection({ port: PORT, host: HOST }, () => {// o port: 5000, host:'localhost'

    //paso 4: mensaje para la coneccion
    console.log('conectado al servidor')

    //paso 5: enviamos un mensaje inicial al servidor
    client.write('hola, servidor')

    //paso 6: configuramos tiempo de espera
    client.setTimeout(1000, () => {
        console.log('tiempo de esperfa alcanzado, cerrando coneccion ...')
        client.end()
    });
    //paso 7: pausamos la recepcion de datos despues de 2 segundos
    setTimeout(() => {
        console.log('pausando la recepcion de datos')
        client.pause()

        setTimeout(() => {
            client.resume('reanudando la recepcion de datos')

            client.write('otro mensaje despues de reanudar')
        }, 3000)
    }, 2000)

})
client.on('error', (err) => {
    console.error('Error: ', err.message)
})
//paso 8: para permitir que el proceso de node termine si no hay mas tareas pendientes
client.unref()

//paso 9: para mantener activo el proceso mientras la coneccion siga abierta
client.ref()

setTimeout(() => {
    console.log('destgruyendo el socket')
    client.destroy()
}, 5000)
