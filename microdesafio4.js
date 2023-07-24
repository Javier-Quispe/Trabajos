let operacion = "sumar"; 
let valor1 = 2; 
let valor2 = 2; 
let resultado;

switch (operacion){
    case "sumar":
        resultado = valor1 + valor2; 
        console.log("El resultado de sumar " + valor1 + " + " + valor2 + " es " + resultado);
        break;
    case "restar":
        resultado = valor1 - valor2;
        console.log("El resultado de restar " + valor1 + "-" + valor2 + " es " + resultado);
        break; 
    case "multiplicar":
        resultado = valor1 * valor2;
        console.log("El resultado de multiplicar " + valor1 + "*" + valor2 + " es " + resultado);
        break;
    case "dividir":
        resultado = valor1 / valor2;
        console.log("El resultado de dividir " + valor1 + "/" + valor2 + " es " + resultado);
        break;
    default:
        console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir");
}