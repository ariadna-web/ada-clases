function invertirPalabras(frase) {
    return frase.split("").reverse().join(" ");
}
let frase = "no se me ocurre ninguna frase, F."
console.log(invertirPalabras(frase));