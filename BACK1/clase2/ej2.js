
const fs = require('fs');
const rutaArchivo = './libro2.json';

const jsonData = fs.readFileSync('libro2.json', 'utf8');
const estudiante = JSON.parse(jsonData);
const jsonString = JSON.stringify(estudiante);

console.log(`informacion del estuduante:`, jsonString);

