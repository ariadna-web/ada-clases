//pasemos de horas a minutos
const prompt = require("prompt-sync")({ sigint: true });

let horas = parseFloat(prompt("ingresa la hora para saber cuantos minutos son: "));
const minutos = deHoraAMinutos(horas);

function deHoraAMinutos(horas) {
    const minutos = horas * 60;
    return minutos;
}

console.log(deHoraAMinutos(horas))