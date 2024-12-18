//calculafr origen del auto
const prompt = require("prompt-sync")({ sigint: true });

let auto = parseFloat(prompt("ingresa la marca del auto: "));

const regionalONo = (auto) => {
    let origen;
    if (auto === `Chevrolet` || auto === `ford` || auto === `fiat`) {
        origen = `${auto} es de origen nacional`
    }
    else {
        origen = `${auto} es de origen extranjero`
        return origen;
    }
}
let resultado = verificarOrigenAuto(auto);

console.log(resultado);
