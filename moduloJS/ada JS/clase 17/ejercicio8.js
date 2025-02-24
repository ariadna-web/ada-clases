const prompt = require("prompt-sync")({ sigint: true });

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const busquedaBinaria = (list, item){
    let low = 0;;
    let high = list.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const adivinar = list[mid];
        if (adivinar === item) {
            return mid;
        }
    }
}
console.log("la posicion del numero 1 es: " + busquedaBinaria(list, 1));
