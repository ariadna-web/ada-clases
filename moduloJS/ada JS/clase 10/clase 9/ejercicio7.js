// de kilos a libras
const prompt = require("prompt-sync")({ sigint: true });

let kilos = parseFloat(prompt("cuantos quilos de amor tenes? "));
let libras = kilos * 2.20462;
console.log(`tenes ${libras} libras de amor.`);