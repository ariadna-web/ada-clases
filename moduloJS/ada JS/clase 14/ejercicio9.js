//modelos de autos
const prompt = require("prompt-sync")({ sigint: true });

let modelosDeAutos = ["toyota", "ford", "honda", "toyota", "bmw", "ford", "toyota"]

ultimaAparicionAuto = function (modelo) {
    let posicion = -1;
    for (let i = 0; i < modelosDeAutos.length; i++) {

        if (modelosDeAutos[i] === modelo) {
            indiceUltimo = i;
        }
    }
    if (indiceUltimo !== -1) {
        console.log(`el modelo ${modelo} esta en la posicion ${indiceUltimo + 1} de la lista`);
    } else {
        console.log(`el modelo ${modelo} no esta presenter en esta lista.`);
    }

}
ultimaAparicionAuto("toyota");
