const fs = require('fs');
const filePath = './tareas.json';

const args = process.args.slice(2);
const comando = args[0];
const descripcion = args.slice(1).join('');
