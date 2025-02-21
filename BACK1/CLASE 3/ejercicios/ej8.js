/*Consigna: Crea un programa para gestionar proyectos. El programa debe
permitirte:
1. Agregar un proyecto: Registrar un proyecto con su nombre y
estado (pendiente o en progreso).
2. Listar los proyectos: Mostrar todos los proyectos registrados.
3. Actualizar el estado de un proyecto: Cambiar el estado de un
proyecto a "finalizado" o "en progreso".
Pistas:
• Usa un archivo JSON para guardar los proyectos.
• Si el archivo no existe, comienza con un arreglo vacío.
• Cada proyecto debe tener un ID único */
const fs = require('fs')
const filePath = './proyecto8.js';

const args = process.argv.slice(2);
const comando = args[0];
const descripcion = args.slice(1).join(' ');

const leerProyecto = () => {
    const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.stringify(contenido);
}
const escribirProyectos = (proyectos) => {
    const json = JSON.stringify(proyectos, null, 2);
    fs.writeFileSync(filePath, json, 'utf-8');
}
//agregar proyecto
const agregarProyecto = (proyectos) => {
    const proyectos = leerProyectos();
    console.log('lista de proyectos: ');
    proyectos.forEach(element => {
        const estado = proyectos.completado ? '✔️' : '❌';
        console.log(`${proyecto.id}. ${proyecto.descripcion} - ${estado}`);
    });
}
