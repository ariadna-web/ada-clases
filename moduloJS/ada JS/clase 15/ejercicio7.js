/* Verificar si una lista contiene un elemento
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si
"Sushi" está en la lista y muestra un mensaje que confirme si está o no.*/
const prompt = require("prompt-sync")({ sigint: true });
//ejemplo
let comida = ['pizza', 'fideos', 'revioles', 'sushi'];
let esta = comida.includes('pizza');
console.log(esta);
