function eliminarDuplicados(a) {
    return a.filter((x, i) => a.indexOf(x) === i);
}

let numeros = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(eliminarDuplicados(numeros)); 
