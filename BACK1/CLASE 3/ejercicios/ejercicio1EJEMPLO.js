
//PASO 1:  importacion
const fs = require('fs');
const filePath = './libros.json';

//PASO 2: LEEER LIBRO
const leerLibros = () => {
    // Si el archivo no existe, creamos un archivo vacío con un arreglo
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const contenido = fs.readFileSync(filePath, 'utf-8'); // Leemos el archivo
    return JSON.parse(contenido); // Convertimos el contenido a un arreglo de libros
};
//PASO 3: escribir los libros en el archivo
const escribirLibros = (libros) => {
    fs.writeFileSync(filePath, JSON.stringify(libros, null, 2))
}
//PASO 4:agregar libro
const agregarLibro = (nombreLibro) => {
    const libros = leerLibros()// leer libros existentes
    libros.push({ id: libros.length + 1, nombre: nombreLibro })//agregar nuevo libro
    escribirLibros(libros)//guardar lista actualizada
    console.log(`libro agregado: ${nombreLibro}`)
}
//PASO 5:lista de libros
const listarLibros = () => {
    const libros = leerLibros()//leemos el libro
    console.log("lista de libros favoritos: ");
    libros.forEach(libro => {
        console.log(`${libro.id}. ${libro.nombre}`);
    });
}
// PASO 6:ejemplo de uso
agregarLibro('el principito')
agregarLibro('narnia')
agregarLibro('las 3 coronas')
agregarLibro('el hobbit')
listarLibros()

