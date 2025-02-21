/*Consigna: Crea un programa para gestionar tus tareas pendientes. El
programa debe permitirte:
1. Agregar una tarea: Registrar una tarea pendiente con su
descripción.
2. Listar las tareas: Mostrar todas las tareas registradas.
3. Eliminar una tarea: Eliminar una tarea de la lista.
Pistas:
• Usa un archivo JSON para guardar las tareas.
• Si el archivo no existe, comienza con un arreglo vacío.
• Eliminar una tarea se puede hacer por su ID.*/
const { Console } = require('console');
const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');
const filePath = './tareas3.json';

const tareasPendientes = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]')
    } const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido);
}
//AGREGAR TAREA
const agregarTarea = (nombreTarea) => {
    const tareas = tareasPendientes()
    tareas.push({ id: tareas.length + 1, nombre: nombreTarea })
    escribirTareas(tareas);
    console.log(`tarea agregada: ${nombreTarea}`)
}
//ESCRIBIR EN EL ARCHIVO JSON
const escribirTareas = (tareas) => {
    fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2))
}
//LISTAR TAREAS
const listarTareas = () => {
    const tareas = tareasPendientes();
    console.log(`LISTA DE TAREAS: `);
    tareas.forEach(tarea => {
        console.log(`ID:${tarea.id}, tarea: ${tarea.nombre}`)
    });
}

//ELIMINAR TAREA
const eliminarTarea = (idTarea) => {
    let tareas = tareasPendientes();
    tareas = tareas.filter(tarea => tarea.id !== idTarea);
    escribirTareas(tareas);
    console.log(`tarea ${idTarea} eliminada`);
}
agregarTarea('comprar pan');
agregarTarea('estudiar');
listarTareas();
eliminarTarea();
listarTareas();