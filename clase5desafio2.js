// Primera función
function calcularTotalHamburguesa(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let precioBase = 0;
  
    switch (tipoHamburguesa) {
      case 'Carne a la parrilla':
        precioBase = 1800;
        break;
      case 'Pollo':
        precioBase = 1500;
        break;
      case 'Vegetariana':
        precioBase = 1200;
        break;
      default:
        return 'Tipo de hamburguesa inválida';
    }
  
    let total = precioBase;
  
    if (jamon) {
      total += 30;
    }
    if (queso) {
      total += 25;
    }
    if (salsaTomate) {
      total += 5;
    }
    if (mayonesa) {
      total += 5;
    }
    if (mostaza) {
      total += 5;
    }
    if (tomate) {
      total += 15;
    }
    if (lechuga) {
      total += 10;
    }
    if (cebolla) {
      total += 10;
    }
  
    return total;
  }
  
  // Segunda función
  function mostrarTotal(nombre, apellido, tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    const total = calcularTotalHamburguesa(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla);
    console.log(`Estimado ${nombre} ${apellido}, el monto total a pagar es de: $${total}`);
  }
  
  mostrarTotal("Javier", "Quispe", "Pollo", true, true, true, false, true, true, false, true);
  