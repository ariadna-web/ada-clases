/*Consigna:
¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar
tu perfil! Agrega un nuevo atributo hobby a tu perfil y guarda los cambios
en el archivo perfil.json.
 Pista: Primero, lee el archivo existente, actualiza el objeto y vuelve a
escribirlo.
 */
const fs = require('fs');
const filePath = './perfil.json';

const jsonData = fs.readFileSync(filePath, 'utf-8');
const perfil = JSON.parse(jsonData);
const infoPerfil = JSON.stringify(perfil);

perfil.hobby = 'cantar';
fs.writeFileSync(filePath, JSON.stringify(perfil, null, 2), 'utf-8');

console.log(`perfil actualizado: `);
console.log(JSON.stringify(perfil, null, 2))