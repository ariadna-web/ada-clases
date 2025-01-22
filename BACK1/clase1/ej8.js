function contarLetras(cadena, letra) {
    return cadena.toLowerCase().split(letra.toLowerCase()).length - 1;
}
let cadena = "somos lo que hacemos para cambiar el mundo, no lo que nos sucede. (iron man)";
let letra = "m";
let resultado = contarLetras(cadena, letra);
console.log(resultado)