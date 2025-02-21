//importamos el modulo 'readline' para trabajar con entradas y salidas interactivas.
const readline = require('readline');

//cargamos las variables de entorno desde el archivo '.env' usando 'dotenv'
require('dotenv').config();

//establecemos un saludo predeterminado usando una variable de entorno.
//si no se define en el archivo '.env', usamos 'hola' como valor por defecto.
const defaultGreeting = process.env.GREETING || 'hola';

//procesamos los argumentos de linea de comandos (process.argv).
//capturamos el primer argumento despues del nombre del archivo con el nombre del usuario.
//si no se proporciona un argumento, usamos 'invitado' como valor preddeterminado.
const args = process.argv.slice(2);
const userName = args[0] || 'invitado';

//mostramos el saludo personalizado y el nombre del usuario.
console.log(`${defaultGreeting}, ${userName}`);

//mostramos informacion sobre el entorno de ejecucion:
console.log('informacion sobre el entorno de ejecucion:');
//directorio actual desde donde se ejecuta el programa.
console.log(`-directirio actual: ${process.cwd}`);
//plataforma del sistema operativo(win32,linux,darwin,etc.).
console.log(`-plataforma: ${process.platform}`);

//creemos una interfaz readline para interactuar con el usuario.
//'input' se configura con el flujo de entrada estandar (teclado).
//'output' se configura como el flujo de salida estandar (consola).
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//usamos el metodo 'rl.question' para mostrar una pregunta al usuario.
//la pregunta se muestra en consola, y la respuesta se procesa en el callback.
rl.question('cuantos años tienes?', (age) => {
    //mostramos un mensaje con la edad del usuario.
    console.log(`¡wow, ${age} años es una gran edad!`);
    //cerramos la interfaz readline despues de obtener la respuesta.
    rl.close();
});
//manejamos el evento 'close' que se emite cuando cierra la interfaz readline.
//mostramos un mensaje de despedida y finalizamos el programa de forma ordenada.
rl.on('close', () => {
    console.log('gracias por usar este programa. ¡adios!');
    //usamos 'process.exist(0)' para indicar que el programa termino con exito.
    process.exit(0);
});