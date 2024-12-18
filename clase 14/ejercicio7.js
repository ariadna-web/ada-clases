//definiendo libros
const prompt = require("prompt-sync")({ sigint: true });

let libro1 = {
    titulo: "Insomnia",
    autor: "J.R Johansson",
    anioDePublicacion: 2013,
    mostrarLibro: function (libro) {

        return `el titulo del libro es ${this.titulo}, fue escrito por ${this.autor} en el anio ${this.anioDePublicacion}`
    }
}
let libro2 = {
    titulo: "El Alquimista",
    autor: "Michael Acoot",
    anioDePublicacion: 2007,
    mostrarLibro: function (libro) {
        return `el titulo del libro es ${this.titulo}, fue escrito por ${this.autor} en el anio ${this.anioDePublicacion}`
    }
}
console.log(libro1.mostrarLibro(1));
console.log(libro2.mostrarLibro(2));