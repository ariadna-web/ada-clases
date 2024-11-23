//mayor o menor?
const prompt = require("prompt-sync")({ sigint: true });

let edad = parseInt(prompt("cuantos años tenes?  "));
if (edad > 18) {
    console.log("sos mayor de edad");
} else if (edad < 18) {
    console.log("sos menor de edad");
}