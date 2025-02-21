/**Consigna: Crea un programa que permita registrar contactos con
nombre, teléfono y correo electrónico. El programa debe permitirte:
1. Agregar un contacto: Registrar un nuevo contacto.
2. Listar los contactos: Mostrar todos los contactos registrados.
3. Eliminar un contacto: Eliminar un contacto de la lista.
Pistas:
• Usa un archivo JSON para guardar los contactos.
• Si el archivo no existe, comienza con un arreglo vacío. */
const fs = require('fs');
const filePath = './contactos5.json';
let contactos = [];
function agregarContacto(nombre, telefono, correo) {
    contactos.push({ nombre, telefono, correo });
    guardarContactos();
}
function guardarContactos() {
    fs.writeFileSync('contactos5.json', JSON.stringify(contactos, null, 2));
}
function listarContactos() {
    console.log(contactos);
}
function eliminarContacto(id) {
    contactos = contactos.filter((c, index) => index !== id);
    guardarContactos();
}
agregarContacto('ari', '2665125823', 'ariadnagamer@getMaxListeners.com');
listarContactos();
eliminarContacto(0);
listarContactos();
