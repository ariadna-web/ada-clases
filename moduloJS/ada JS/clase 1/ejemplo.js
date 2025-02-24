const prompt = require("prompt-sync")({ sigint: true });
let libros = [
    {
        id: 1,
        titulo: "El Señor de los Anillos 2",
        autor: "J.R.R. Tolkien",
        año: 1954,
        disponible: true
    },
    {
        id: 2,
        titulo: "El Hobbit 3",
        autor: "J.R.R. Tolkien",
        año: 1937,
        disponible: false
    },
    {
        id: 3,
        titulo: "La Sombra del Viento",
        autor: "Carlos Ruiz Zafón",
        año: 2001,
        disponible: true
    },
    {
        id: 4,
        titulo: "El Código Da Vinci",
        autor: "Dan Brown",
        año: 2003,
        disponible: false
    },
    {
        id: 5,
        titulo: "La Casa de los Espíritus",
        autor: "Isabel Allende",
        año: 1982,
        disponible: true
    },
    {
        id: 6,
        titulo: "El Poder del Ahora",
        autor: "Eckhart Tolle",
        año: 1997,
        disponible: false
    },
    {
        id: 7,
        titulo: "La Historia de un Amor",
        autor: "Gabriel García Márquez",
        año: 1967,
        disponible: true
    },
    {
        id: 8,
        titulo: "El Aleph",
        autor: "Jorge Luis Borges",
        año: 1949,
        disponible: false
    },
    {
        id: 9,
        titulo: "La Ciudad y los Perros 2",
        autor: "Mario Vargas Llosa",
        año: 1963,
        disponible: true
    },
    {
        id: 10,
        titulo: "El Amor en los Tiempos del Cólera",
        autor: "Gabriel García Márquez",
        año: 1985,
        disponible: false
    }
];
let usuarios = [
    {
        id: 1,
        nombre: "Juan Pérez",
        email: "juan.perez@example.com",
        librosPrestados: []
    },
    {
        id: 2,
        nombre: "María Rodríguez",
        email: "maria.rodriguez@example.com",
        librosPrestados: []
    },
    {
        id: 3,
        nombre: "Pedro García",
        email: "pedro.garcia@example.com",
        librosPrestados: []
    },
    {
        id: 4,
        nombre: "Ana López",
        email: "ana.lopez@example.com",
        librosPrestados: []
    },
    {
        id: 5,
        nombre: "Carlos Martínez",
        email: "carlos.martinez@example.com",
        librosPrestados: []
    }
];

//3 new usser (A)
let todosUsuarios = usuarios;//concatenar nuevos usuarios yusuarios creados
let listadoUsuarios = [];

let registrar = function () {
    let nombre = prompt("ingresa tu nombre: ");
    let email = prompt("ingresa tu email: ");

    let nuevoUsuario = {
        nombre: nombre,
        email: email
    }
    listadoUsuarios.push(nuevoUsuario);
    todosUsuarios.push(nuevoUsuario);
    console.log(`usuario registrado con exito. ${nuevoUsuario.nombre}`);
}
//mostrar todos los usuarios (B)

registrar();

//buscar el usuario por su email
function buscarUsuarioPorEmail() {
    let emailBuscado = prompt("ingresa el email del usuario que buscas: ");
    let usuarioEncontrado = todosUsuarios.find(usuario => usuario.email.toLocaleLowerCase() === emailBuscado.toLocaleLowerCase());
    if (usuarioEncontrado) {
        console.log(`el usuario ${usuarioEncontrado.nombre},${usuarioEncontrado.email} fue encontrado con exito.`);
    } else {
        console.log("usuario no encontrado.");
    }
}
buscarUsuarioPorEmail();


//eliminar usuario (D)
function borrarUsuario() {
    let emailBuscado = prompt("ingresa el email del usuario que deseas eliminar: ");
    let usuarioEncontrado = todosUsuarios.find(usuario => usuario.email.toLowerCase() === emailBuscado.toLocaleLowerCase());
    if (usuarioEncontrado) {
        let indice = todosUsuarios.indexOf(usuarioEncontrado);
        todosUsuarios.splice(indice, 1);
        console.log(`el usuario ${usuarioEncontrado.nombre} fue eliminado con exito.`);
    } else {
        console.log(`el usuario no fue encontrado.`)
    }
}
borrarUsuario();





