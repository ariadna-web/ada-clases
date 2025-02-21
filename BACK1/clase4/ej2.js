/*Es hora de revisar tu perfil digital. Lee el archivo perfil.json que creaste
en el ejercicio anterior y muestra la información en la consola para
asegurarte de que todo está correcto.
 Pista: Utiliza fs.readFile con la codificación 'utf-8' para obtener el
contenido del archivo como texto legible.
*/
const fs = require('fs');
const filePath = 'BACK1/clase4/perfil.json';

const jsonData = fs.readFileSync('./perfil.json', 'utf-8');
const perfil = JSON.parse(jsonData);
const infoPerfil = JSON.stringify(perfil);

console.log(infoPerfil)