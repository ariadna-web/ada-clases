/*Consigna:
Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json
existe. Si no existe, crea uno nuevo con un perfil básico.
 Pista: Usa fs.existsSync para verificar la existencia del archivo. */

const fs = require('fs');
const filePath = 'C:\\Users\\Ari\\ADA-TRABAJOS\\BACK1\\clase4\\perfil.json';

const verPerfil = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    } const contenido = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contenido);
};
const guardarPerfil = (perfil) => {
    fs.writeFileSync(filePath, JSON.stringify(perfil, null, 2));
}
const perfil = verPerfil();
console.log(perfil)