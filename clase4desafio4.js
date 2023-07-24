let operacion ="";
let valor1 = "";
let valor2 = "";

let resultado = ""; // Variable para almacenar el resultado de la operación

switch (operacion) {
  case "sumar":
    resultado = valor1 + valor2;
    console.log(`El resultado de sumar ${valor1} + ${valor2} es ${resultado}`);
    break;
  case "restar":
    resultado = valor1 - valor2;
    console.log(`El resultado de restar ${valor1} - ${valor2} es ${resultado}`);
    break;
  case "multiplicar":
    resultado = valor1 * valor2;
    console.log(`El resultado de multiplicar ${valor1} * ${valor2} es ${resultado}`);
    break;
  case "dividir":
    resultado = valor1 / valor2;
    console.log(`El resultado de dividir ${valor1} / ${valor2} es ${resultado}`);
    break;
  default:
    console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir");
    break;
}
