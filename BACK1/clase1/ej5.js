function inicialesMayuscula(nombre) {
    return nombre.split(" ").map(n => n[0].toUpperCase()).join(".");
}
let nombre = "ariadna germano";
let iniciales = inicialesMayuscula(nombre);
console.log(iniciales);