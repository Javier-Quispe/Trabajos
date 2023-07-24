let perfil = ""; // asignar aquí el perfil

if (perfil === "") {
  console.log("Debe especificar el perfil del usuario");
} else if (perfil.toUpperCase() === "ADMINISTRADOR") {
  console.log("Usted tiene todos los privilegios de uso del sistema");
} else if (perfil.toUpperCase() === "ASISTENTE") {
  console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
} else if (perfil.toUpperCase() === "INVITADO") {
  console.log("Usted sólo tiene permisos de consultar datos");
} else {
  console.log("Debe especificar un perfil válido");
}
