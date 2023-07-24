
let fs = require('fs');


const data = fs.readFileSync('./bicicletas.json', 'utf8');
const bici = JSON.parse(data);
//console.log(bici)//
module.exports = bici;
