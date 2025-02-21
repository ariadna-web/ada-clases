/*En los ejercicios, necesitarán trabajar con archivos .json para almacenar y
leer datos de manera persistente. Cuando leemos un archivo JSON,
usamos fs.readFileSync() para obtener su contenido, y luego lo
convertimos a un objeto JavaScript usando JSON.parse().
• Leer un archivo JSON:
const contenido = fs.readFileSync('archivo.json', 'utf8');
const datos = JSON.parse(contenido);
• Escribir un archivo JSON:
const datos = [{ id: 1, nombre: 'Juan' }];
fs.writeFileSync('archivo.json', JSON.stringify(datos, null, 2), 'utf8');
 */

//leer archivo JSON
const fs = require('fs');
const filePath = './archivo4.json'
const leerArchivo = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido);
}
// escribir archivo
const escribirArchivo = (archivo) => {
    fs.writeFileSync(filePath, JSON.stringify(archivo, null, 2));
}
const agregarArchivo = (nombereArchivo) => {
    const archivos = leerArchivo();
    console.log("informacion de archivo: ");
    archivos.push({ id: archivos.length + 1, nombre: nombereArchivo })
    escribirArchivo(archivos)
    console.log(`archivo agregado ${nombereArchivo}`)
}

agregarArchivo('nombre : ari')
agregarArchivo('hobbie : cantar')
