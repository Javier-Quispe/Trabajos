let palabra = "ventana"; // Solicita al usuario que ingrese una palabra

let palabraTraducida = ""; // Variable para almacenar la palabra traducida

switch (palabra) {
  case "perro":
    palabraTraducida = "dog";
    break;
  case "gato":
    palabraTraducida = "cat";
    break;
  case "puerta":
    palabraTraducida = "door";
    break;
  case "ventana":
    palabraTraducida = "window";
    break;
  case "mesa":
    palabraTraducida = "table";
    break;
  default:
    console.log("La palabra ingresada es incorrecta");
    break;
}

if (palabraTraducida) {
  console.log(`La palabra traducida al inglés es: ${palabraTraducida}`);
}

