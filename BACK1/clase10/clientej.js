//!: importaciones
const net = require('net')
const { send } = require('process')
const readline = require('readline-sync')//conecta el servidor con el cliente

//2:definir las opciones de coneccion
const options = {
    port: 4000,
    host: '127.0.0.1'//nuestro host
}

//3:crear una nueva coneccion
const client = net.createConnection(options)

//5: manejo de eventos
client.on('connect', () => {
    console.log('conexion exitosa')
    sendLine()//llama a la funcion sendLine para que el usuario ingrese los datos
})
client.on('data', (data) => {
    console.log('el servidor dice: ' + data)
    sendLine()
})
client.on('error', (err) => {
    console.log(err.message)
})

//4: definimos la funcion sendLine() que permite al usuario
//ingresar un mensaje y decide que hacer

function sendLine() {
    //muestra un prompt y lee la entrada del usuario de manera sincrona
    let line = readline.question('\ndigita alguna cosa\t')
    if (line == "0") {   //verifica que el usuario cierra 
        client.end() //la conexion
    } else {
        client.write(line)//envia el mensaje del usuario a la terminal
    }
}