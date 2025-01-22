const alumnos = require('./alumnos4');

console.log("los nombres de los estudiantes son: ");
alumnos.forEach(alu => console.log(`- ${alu.nombre}`));

//notas del alumno especifico
const calcularPromedio = notas => notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

const nombreAlumno = 'lupe';
const alumno = alumnos.find(alu => alu.nombre === alumnoNombre);
if (alumno) {
    const promedio = calcularPromedio(alumno.notas);
    console.log(`el promedio sw ${alumnoNombre} es: ${promedio.toFixed(2)}`);
} else {
    console.log(`el estudiante con nombre ${nombreAlumno} no encontrado.`);
}
//agregar nuevo alumno
alumnos.push({ nombre: 'ari', edad: 21, curso: 'back', notas: [9, 9, 10, 10] });

//mostrarlo en JSON
console.log('lista de alumnos actualizada: ');
console.log(JSON.stringify(alumnos, null, 2));
