/*libro 
1.Dentro de la carpeta ADA_TRABAJOS, crea una nueva carpeta llamada
clase2.
2.En la carpeta clase2, crea un archivo JavaScript llamado actividad1.js.
3.En este archivo, crea un objeto JSON que represente un libro. El objeto
debe tener las siguientes propiedades: titulo, autor, año, genero (puede
ser un array de géneros).
Instrucciones:
• Muestra en la consola el título y el autor del libro.
• Actualiza el año del libro a un valor más reciente.
• Añade una nueva propiedad llamada páginas que indique el número
de páginas del libro.
• Muestra el objeto actualizado en la consola.*/


const fs = require('fs');
const rutaArchivo = './libro1.json';

fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) {
        console.error("error", err);
        return;
    }
    const libro = JSON.parse(data);
    console.log(`el titulo es: ${libro.titulo} y su autor es ${libro.autor}`);

    let libroActualizado = {
        titulo: libro.titulo,
        autor: libro.autor,
        genero: libro.genero,
        anio: libro.anio + 1,
        paginas: 400
    }
    console.log(libroActualizado)

})



