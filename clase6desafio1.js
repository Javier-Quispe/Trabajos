//Seis productos de electrodomésticos
let electrodomesticos = ["TV", "Lavadora", "Refrigerador", "Horno", "Aspiradora", "Licuadora"];

// manera aleatoria
let randomElement1 = electrodomesticos[Math.floor(Math.random() * electrodomesticos.length)];
let randomElement2 = electrodomesticos[Math.floor(Math.random() * electrodomesticos.length)];
console.log("Elemento aleatorio 1:", randomElement1);
console.log("Elemento aleatorio 2:", randomElement2);

// Extraer el primer elemento y agregarlo al final 
let primerElemento = electrodomesticos.shift();
electrodomesticos.push(primerElemento);
console.log("Array después de extraer y agregar el primer elemento:", electrodomesticos);

// Agregar dos nuevos productos al final 
electrodomesticos.push("Microondas", "Cafetera");
console.log("Array después de agregar dos nuevos productos:", electrodomesticos);

// Mostrar la cantidad de elementos 
console.log("Cantidad de elementos en el array:", electrodomesticos.length);

// Buscar un elemento 
let productoBuscado = "Termo";
if (electrodomesticos.includes(productoBuscado)) {
  console.log("Producto encontrado");
} else {
  console.log("El producto buscado no existe");
}

// Unificar todos los elementos 
let cadenaTexto = electrodomesticos.join(" ");
console.log("Cadena de texto:", cadenaTexto);

// Determinar la cantidad de elementos 
console.log("Cantidad de elementos en la cadena de texto:", cadenaTexto.split(" ").length);

// Cambiar el nombre de un producto 
let nuevoNombre = "Televisor";
cadenaTexto = cadenaTexto.replace("TV", nuevoNombre);
console.log("Cadena de texto con nombre cambiado:", cadenaTexto);

// Generar un nuevo array 
let nuevoArray = cadenaTexto.split(" ").join(",");
console.log("Nuevo array:", nuevoArray);
