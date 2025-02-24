//cuenta regresiva
const prompt = require("prompt-sync")({ sigint: true });

function cuentaRegresiva() {
    let contador = 10;

    let intervalo = setInterval(() => {
        console.log(contador);

        if (contador === 0) {
            console.log("¡Despegue!");
            clearInterval(intervalo);
        }

        contador--;
    }, 1000);
}
cuentaRegresiva();