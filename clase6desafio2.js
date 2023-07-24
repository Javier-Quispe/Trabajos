// Tarea 2: Crear una estructura para almacenar un conjunto de películas
let peliculas = ['Turno de día', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick', 'Elvis', 'Thor: amor y trueno'];

// Tarea 3: Convertir la película más vendida a mayúsculas y colocarla primero en la estructura
function peliculaMasVendida(pelicula) {
  let peliculaMayusculas = pelicula.toUpperCase();
  let index = peliculas.indexOf(pelicula);

  if (index !== -1) {
    peliculas.splice(index, 1);
    peliculas.unshift(peliculaMayusculas);
  }

  return peliculas;
}

let peliculaVendida = 'Thor: amor y trueno';
peliculas = peliculaMasVendida(peliculaVendida);
console.log(peliculas);

// Tarea 3: Crear una estructura para las próximas películas a estrenar
let proximasPeliculas = ['Counter-Strike', 'NOP', 'Vértigo', 'Nick', 'Avatar'];
let cadenaPeliculas = proximasPeliculas.join(',');
console.log(cadenaPeliculas);

// Tarea 3: Excluir el primer elemento de la estructura
proximasPeliculas.shift();
console.log(proximasPeliculas);

// Tarea 4: Combinar ambas estructuras
let todasPeliculas = peliculas.concat(proximasPeliculas);
console.log(todasPeliculas);
