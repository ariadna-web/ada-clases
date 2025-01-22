const prompt = require("prompt-sync")({ sigint: true });

let menu = {
    "pizza": 19,
    "salchipapa": 20,
    "ensalada rusa": 27,
    "pancho": 16,
    "empanadas": 6
}

function platosEconomicos(menu) {
    let platosBaratos = [];
    for (let plato in menu) {
        if (menu[plato] < 20) {
            platosBaratos.push(plato);
        }
    } return platosBaratos;
} console.log(platosEconomicos(menu));