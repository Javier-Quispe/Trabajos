let nombre = "Javier";
let apellido = "Quispe";
let sueldoActual = 475200;
let porcentajeAumento = 25;

let calculoAumento = ((sueldoActual * porcentajeAumento)/ 100)

let sueldoNuevo = calculoAumento + sueldoActual

console.log("Hola, estimado "+nombre+" "+apellido);
console.log("En base a su sueldo actual: ");
console.log("$",sueldoActual);
console.log("recibio un aumento del 25%: ");
console.log("$",calculoAumento);
console.log("y su nuevo sueldo es de: ",sueldoNuevo);