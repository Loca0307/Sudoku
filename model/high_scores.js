
const fs = require('fs-extra');
const path = require('path');


let name = "";
let score = 0;
let time = 0;
let previous_games = [];

let high_scores = [];


try {
    o = fs.readJSONSync(path.resolve("./model/high_scores.json", high_scores));
    high_scores = o.high_scores;
    
} catch (e) { }


function add(player_score, player_boards, player_name, player_time) {

    score = player_score;
    name = player_name;
    time = player_time;
    previous_games = player_boards;

    high_scores = [name, score, time, previous_games];

    save();
}



function save() {
    //TODO
    high_scores.sort((first, second) => second.score >= first.score ? 1 : -1);
    fs.writeJSONSync(path.resolve("./model/high_scores.json"), {high_scores});
}


module.exports = {
    data: high_scores,
    save,
    add
}