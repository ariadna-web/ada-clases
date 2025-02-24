// gastos de la semana 
const prompt = require("prompt-sync")({ sigint: true });

const matrizGastos = [
    [3455, 3468, 5678, 2345, 67890, 780, 2346],
    [6939, 8974, 4877, 7648, 678, 7964, 6789],
    [5678, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 400, 1980, 1270, 950]
];

function totalGastosSemana(semana) {
    let dia = 0;
    for (let i = 0; dia < matrizGastos[semana].length; dia++) {
        total += matrizGastos[semana][dia];
    }
    return total;
}

function totalGastosDia(dia) {
    let total = 0;
    for (let semana = 0; semana < matrizGastos[dia].length; semana++) {
        total += matrizGastos[semana][dia];
    }
    return total;
}

function semanaYdiaMasGastos() {
    let maxGastoSemana = 0;
    let maxGastoDia = 0;
    let masGasto = matriz[0][0];

    for (let semana = 0; semana < matrizGastos.length; semana++) {
        for (let dia = 0; dia < matrizGastos[semana].length; dia++);
        if (matrizGastos[semana][dia] > masGasto) {
            masGasto = matrizGastos[semana][dia];
            maxGastoSemana = semana + 1;
            maxGastoDia = dia + 1;

        }
    }
    return { semana: maxGastoSemana, dia: maxGastoDia }
}

console.log("Total de gastos en la semana 2:", totalGastosSemana(1)); // Semana 2 (índice 1)
console.log("Total de gastos en el día 3:", totalGastosDia(2)); // Día 3 (índice 2)
console.log("Total de gastos en el mes:", totalGastosMes());
const maxGastos = semanaYDiaMasGastos();
console.log("Semana con más gastos:", maxGastos.semana);
console.log("Día con más gastos:", maxGastos.dia);