
const fs = require('fs-extra');
const path = require('path');

let names = [];


try {
    o = fs.readJSONSync(path.resolve("./model/names.json"));
    names = o.names;
    
} catch (e) { }

function add(player_name) {

    names.push(player_name.name);
    
    save();
}



function save() {
    //TODO
    fs.writeJSONSync(path.resolve("./model/names.json"), {names});
}


module.exports = {
    data: names,
    save,
    add
}