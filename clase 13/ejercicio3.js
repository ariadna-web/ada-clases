//mensaje global y local, scope

const prompt = require("prompt-sync")({ sigint: true });

var saludoGlobal = "hola desde el scope global";

function mostrarMensaje() {

    let saludoLocal = "hola desde el scope local";
    return saludoLocal

}
console.log(saludoGlobal);
console.log(mostrarMensaje());



