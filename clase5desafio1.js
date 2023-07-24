function calcularMontoAlquiler(tipoVehiculo, diasAlquiler, sillaBebe) {
    let montoPorDia = 0;
  
    switch (tipoVehiculo) {
      case "compacto":
        montoPorDia = 14000;
        break;
      case "mediano":
        montoPorDia = 17000;
        break;
      case "camioneta":
        montoPorDia = 28000;
        break;
      default:
        return "Tipo de vehículo inválido.";
    }
  
    let montoTotal = montoPorDia * diasAlquiler;
  
    if (sillaBebe) {
        var montoAdicionalSilla = 1200 * diasAlquiler;
      montoTotal = montoTotal + montoAdicionalSilla;
    }
  
    var mensaje = "Estimado cliente: en base al tipo de vehículo" + tipoVehiculo + " alquilado, considerando los " + diasAlquiler +  " días utilizados, el monto total a pagar es de "+ montoTotal+ ".";
  
    if (sillaBebe) {
      var mensaje2 = " Además, se ha incluido el costo adicional por la silla para bebé.";
      return mensaje + mensaje2
    }
                
    return mensaje;
  }
  
  
  var tipoVehiculo = "mediano";
  var diasAlquiler = 90000;
  var sillaBebe = true;
  
  var montoAPagar = calcularMontoAlquiler(tipoVehiculo, diasAlquiler, sillaBebe);
  console.log(montoAPagar);
