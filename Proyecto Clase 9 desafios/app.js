// Importar el módulo peliculas.js
const peliculas = require('./peliculas');

// Recorrer el array de películas y mostrar los detalles de cada una
peliculas.forEach((pelicula) => {
  console.log(`Película: ${pelicula.id}`);
  console.log(`Rating: ${pelicula.rating}`);
  console.log(`Premios: ${pelicula.awards}`);
  console.log(`Duración: ${pelicula.length}`);
  console.log(`Precio: $${pelicula.price}`);
  console.log(`Género: ${pelicula.genre}`);
  console.log('----------------------------------');
});

console.log("Mensaje del archivo mensaje: ");
let fs = require("fs")
let mensaje = fs.readFileSync(__dirname + '/mensaje.txt',"utf8")
console.group(mensaje);