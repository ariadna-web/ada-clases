/*Consigna:
¿Quieres empezar de cero? Es momento de eliminar tu archivo perfil.json.
Verifica que el archivo existe antes de intentar borrarlo.
 Pista: Usa fs.unlink para eliminar archivos */

const { countReset } = require('console');
const fs = require('fs');
const filePath = './perfil.json';

const verPerfil = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    } const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido);
}
const eliminarPerfil = () => {
    fs.unlink(filePath);
}