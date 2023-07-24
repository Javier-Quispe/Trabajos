let perfil = "Asistente";

if (perfil === "") {
    console.log("Debe especificar el perfil del usuario");
} 
if (perfil === "administrador" || perfil === "ADMINISTRADOR" || perfil === "Administrador") {
    console.log("Usted tiene todos los privilegios de uso del sistema");
} 
if (perfil === "asistente" || perfil === "ASISTENTE" || perfil === "Asistente") {
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
} 
if (perfil === "invitado" || perfil === "INVITADO" || perfil === "Invitado") {
    console.log("Usted sólo tiene permisos de consultar datos");
} 
else {
    console.log("Debe especificar un perfil válido");
}
