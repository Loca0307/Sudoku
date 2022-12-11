const express = require('express');
const router = express.Router();
module.exports = router;



let db = require("../model").model;
const ObjectId = require('mongodb').ObjectId;
const sudokumodel = require('../model/sudoku');

router.post("/sudoku/new_game", function(req,res) {
    let data = {username: req.body.username, diff: req.body.diff};

    //TODO: Login verification
    //get information from the 
    //res.render("sudoku", {PASS PLAYER AND DIFFICULTY INFORMATION AFTER LOGIN} );

    //TODO: Call sudokumodel (model/sudoku.js) to set up the game

    
    db.names.insertOne(data).then(n => {
        res.format({
            'json': function () {
                res.status(201).json(data);
            }
        })
    });
    
    
    res.render("sudoku");
});

router.get("/sudoku/test_game", function(req,res) {
    res.render("sodukotest");
});