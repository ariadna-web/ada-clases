//el deportista
const prompt = require("prompt-sync")({ sigint: true });

let deportista = {
    nombre: "lucas",
    energia: 7,
    experiencia: 8,
    entrenarHoras: function (horas) {
        let entrenamiento = horas * 5 - this.energia;
        return `a ${this.nombre} le quedan ${entrenamiento} puntos de energia.`
    },
    incrementarExp: function (horas) {
        let aumentoExperiencia = horas * 2 + this.energia;
        return `${this.nombre} acaba de sumar ${aumentoExperiencia} puntos de experiencia.`
    },
}
console.log(deportista.entrenarHoras(5))
console.log(deportista.incrementarExp(5))