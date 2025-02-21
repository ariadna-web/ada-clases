/*Consigna: Crea un programa que te permita gestionar un diario
personal. El programa debe permitirte:
1. Agregar una entrada al diario: Registrar una nueva entrada con
la fecha y el texto.
2. Listar las entradas: Mostrar todas las entradas registradas.
3. Eliminar una entrada: Eliminar una entrada específica por su ID.
Pistas:
• Usa un archivo JSON para guardar las entradas del diario.
• Cada entrada tendrá una fecha y un texto.
• Si el archivo no existe, comienza con un arreglo vacío. */
const fs = require('fs');
const filePath = './diario6.js';
let entradas = [];
function agregarEntrada(fecha, texto) {
    entradas.push({ fecha, texto });
    guardarEntradas();
}
function guardarEntradas() {
    fs.writeFileSync('diario.json', JSON.stringify(entradas, null, 2));
} function listarEntradas() {
    console.log(entradas);
}
function listarEntradas() {
    console.log(entradas);
}
function eliminarEntrada(id) {
    entradas = entradas.filter((e, index) => index !== id);
    guardarEntradas();
}
agregarEntrada('2025-01');
listarEntradas();
eliminarEntrada();
listarEntradas();