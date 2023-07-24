
let fs = require('fs');
let figura1JSON = fs.readFileSync(__dirname + '/datos/figuras1.json', 'utf-8');
let figura2JSON = fs.readFileSync(__dirname + '/datos/figuras2.json', 'utf-8');
let figura3JSON = fs.readFileSync(__dirname + '/datos/figuras3.json', 'utf-8');

function importar(marca){
    switch(marca){
        case 'Hot Toys':
            return figura = JSON.parse(figura1JSON);
            break;
        case  'Bandai':
            return figura = JSON.parse(figura2JSON);
            break;
        case 'Star Wars':
            return figura = JSON.parse(figura3JSON);
            break;
    }
    
}

module.exports = importar;
