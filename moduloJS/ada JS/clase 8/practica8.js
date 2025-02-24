;

const prompt = require("prompt-sync")({ sigint: true });

//new usser
let listadoUsuarios = [];

let registrar = function (nombre, email) {
    let nombre = prompt("ingresa tu nombre: ");
    let email = prompt("ingresa tu email: ");
}
let nuevoUsuario = {
    nombre: nombre,
    email: email
}
listadoUsuarios.push(nuevoUsuario);
console.log(`usuario registrado con exito. ${nuevoUsuario}`);
registrar();
registrar();
registrar();
console.log(`la lista de usuarios es: ${listadoUsuarios}`)