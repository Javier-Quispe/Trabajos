let bicicletas = require('./datosBici');

let dhBici = {
  bicicletas: bicicletas,
  buscarBici: function(id) {
        return this.bicicletas.filter(bici => bici.id === id)[0] || null;

  },
  venderBici: function(id) {
    let bici = this.buscarBici(id);
  if (bici) {
    bici.vendida = true;
    return bici;
  } else {
    return "Bicicleta no encontrada";
  }
  },
  biciParaLaVenta: function() {
    return this.bicicletas.filter(bici => !bici.vendida);
  },
  totalDeVentas: function() {
    return this.bicicletas.reduce((total, bici) => total + (bici.vendida ? bici.precio : 0), 0);
  }
};

console.log(dhBici.buscarBici(0));
console.log(dhBici.venderBici(5));
console.log(dhBici.biciParaLaVenta());
console.log(dhBici.totalDeVentas());