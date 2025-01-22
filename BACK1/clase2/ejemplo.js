const fs = require('fs')

const rutaArchivo = './productos.json'

fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) {
        console.error("error de lectura", err);
        return
    }
    const productos = JSON.parse(data)
    console.log('productos actuales: ', productos);

    const nuevoProducto = {
        id: productos.length + 1,
        nombre: "camara",
        precio: 90
    }
    productos.push(nuevoProducto);
    console.log("productos actualizados", productos);

    const contenidoActualizado = JSON.stringify(productos, null, 2);
    fs.writeFile(rutaArchivo, contenidoActualizado, (err) => {
        if (err) {
            console.error("error al escribir en el archivo: ", err);
        }
        console.log("archivo actualizado");
    })
})

/*json
[
  {
    "id": 1,
    "nombre": "laptop",
    "precio": 400
  },
  {
    "id": 2,
    "nombre": "teclado",
    "precio": 40
  },
  {
    "id": 3,
    "nombre": "camara",
    "precio": 90
  },
  {
    "id": 4,
    "nombre": "camara",
    "precio": 90
  },
  {
    "id": 5,
    "nombre": "camara",
    "precio": 90
  },
  {
    "id": 6,
    "nombre": "camara",
    "precio": 90
  }
]*/