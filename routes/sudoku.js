const express = require('express');
const router = express.Router();
module.exports = router;

let {model} = require("../model");
const sudokumodel = require('../model/sudoku');

router.post("/sudoku/new_game", function(req,res) {
    //TODO: Login verification
    //res.render("sudoku", {PASS PLAYER AND DIFFICULTY INFORMATION AFTER LOGIN} );

    //TODO: Call sudokumodel (model/sudoku.js) to set up the game

    
    res.render("sudoku");
});