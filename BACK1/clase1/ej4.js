let texto = "hola mundo mundial";

function contarVocales(texto) {
    return (texto.match(/[aeiouAEIOU]/g) || []).length;
} console.log(`el numeor de vocales es: ${contarVocales(texto)}`);