function reporteDePasajeros(estacionesAvanzadas) {
    let pasajeros = 200; // Pasajeros iniciales en la estación terminal
    const reporte = [];
  
    for (let estacion = 0; estacion <= estacionesAvanzadas; estacion++) {
      if (estacion === 5) {
        pasajeros += 120; // Suben 120 pasajeros en la estación Florida
        pasajeros -= 80; // Se bajan 80 pasajeros en la estación Florida
      } else {
        pasajeros += 50; // Suben 50 pasajeros en cada estación
        pasajeros -= 30; // Se bajan 30 pasajeros en cada estación excepto en la estación Florida
      }
  
      reporte.push(`En la estación ${estacion} hay ${pasajeros} pasajeros arriba del tren`);
    }
  
    return (reporte);
  }
  