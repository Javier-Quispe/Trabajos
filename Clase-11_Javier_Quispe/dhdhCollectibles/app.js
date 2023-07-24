const importar = require('./collectibles');

//Importar
const hotToys = importar('Hot Toys');
const bandai = importar('Bandai');
const starWars = importar('Star Wars');

//Lista de marcas
const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

//Lista de figuras
const collectibles = {
  figuras: unifiedCollectibles
};

//Mostrar todas las figuras
function listFigures() {
  console.log("Listado de todas las figuras:");
  collectibles.figuras.forEach(figura => {
    console.log("Marca:", figura.marca);
    console.log("Nombre:", figura.nombre);
    console.log("Precio:", figura.precio);
    console.log("Stock:", figura.stock);
    console.log("----------------------");
  });
}

//Mostrar por marca 
function figuresByBrand(marca) {
  const figurasMarca = collectibles.figuras.filter(figura => figura.marca === marca);
  console.log(`Figuras de la marca ${marca}:`);
  figurasMarca.forEach(figura => {
    console.log("Nombre:", figura.nombre);
    console.log("Precio:", figura.precio);
    console.log("Stock:", figura.stock);
    console.log("----------------------");
  });
}

// Mostrar en pantalla
console.log("----------------------");
listFigures();
console.log("----------------------");
figuresByBrand("Hot Toys");
console.log("----------------------");
figuresByBrand("Bandai");
console.log("----------------------");
figuresByBrand("Star Wars");
console.log("----------------------");
