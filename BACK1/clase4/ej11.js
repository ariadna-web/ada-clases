const fs = require('fs');
//funcion para leer contactos
function leerContactos() {
  if (fs.existsSync('contactos.json')) {
    const data = fs.readFileSync('contactos.json', 'utf8');
    return JSON.parse(data);
  } return []//si no existe el archjivo devolvemos una lista vacia

}
function guardarContactos(contactos) {
  fs.writeFileSync('contactos.json', JSON.stringify(contactos, null, 2));
}
//agregar contactos
function agregarContacto(nombre, telefono, edad) {
  const contacto = leerContactos();

  if (contactos.some(contacto.nombre === nombre)) {
    console.log(`el contacto ${contacto.nombre} existe`)
  }
  contactos.push({ nombe, telefono, edad })
  guardarContactos(contacto);
  console.log(`contacto ${nombre} fue agregado con exito`);
}

function listarContactos() {
  const contactos = leerContactos();
  console.log("lista de contactos: ");
  console.table(contactos);
}
function buscarContacto(nombre) {
  const contactos = leerContactos();
  const contacto = contactos.find(c => c.nombre === nombre);

  if (contacto) {
    console.log("contacto encontrado", contacto);
  } else {
    console.log(`no se encontro el contacto "${nombre}"`)
  }
}

agregarContacto('ari', 21, 'ari@gmail.com');