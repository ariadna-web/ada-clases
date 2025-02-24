// que dia de la semana es hoy?
const prompt = require("prompt-sync")({ sigint: true });

let dia = parseFloat(prompt("ingresa el numero que quieras del 1 al 7: "));
if (dia >= 1 && dia <= 7) {
    switch (dia) {

        case 1:
            console.log("lunes");
            break;
        case 2:
            console.log("martes");
            break;
        case 3:
            console.log("miercoles");
            break;
        case 4:
            console.log("jueves");
            break;
        case 5:
            console.log("viernes");
            break;
        case 6:
            console.log("sabado");
            break;
        case 7:
            console.log("domingo");
            break;


    }
} else {
    console.log("error: el numero ingresado no pertenece a un dia de la semana");
}