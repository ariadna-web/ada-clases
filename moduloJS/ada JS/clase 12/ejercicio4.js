//notas de estudiantes
const prompt = require("prompt-sync")({ sigint: true });

let notas = [];

const estudiantes = 5;

console.log(`ingresa las notas de ${estudiantes} estudiantes: `);

for (let i = 0; i < estudiantes; i++) {
    let nota = parseFloat(prompt(`la nota del estudiante es ${i + 1}: `));
    notas[i] = nota;
}
console.log(" notas ingresadas: ");
for (let i = 0; i < notas.length; i++) {
    console.log(`Estudiante ${i + 1}: ${notas[i]}`);
}