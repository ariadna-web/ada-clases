// intercambio de valores
const prompt = require("prompt-sync")({ sigint: true });

let a = 5;
let b = 10;
console.log("Antes del intercambio: a =", a, ", b =", b);
let temporal = a;
a = b;
b = temporal;
console.log("Después del intercambio: a =", a, ", b =", b);
