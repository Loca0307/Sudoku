const express = require('express');
const router = express.Router();
module.exports = router;




let db = require("../model").model;
const ObjectId = require('mongodb').ObjectId;


let {model} = require("../model");
const { sudoku } = require('../model/sudoku');
const sudokumodel = require('../model/sudoku').model;


/* router.get('/', function(req, res) {
    console.log(req.query);

    model.usernames.find({}).toArray().then(result => {

        let model = {result: result}

        res.render("sudoku", model)
    })

   
}) */


router.post("/sudoku/new_game", function(req,res) {
    let data = {username: req.body.username, diff: req.body.diff};

    //TODO: Login verification
    //get information from the 
    //res.render("sudoku", {PASS PLAYER AND DIFFICULTY INFORMATION AFTER LOGIN} );

    //TODO: Call sudokumodel (model/sudoku.js) to set up the game

    model.usernames.insertOne(data).then(n => {

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


//add highscore to player
router.post("sudoku/new_game", function(req, res) {
    let data = {username: req.body.username, diff: req.body.diff, score: req.body.score};


    model.username.findOne({username: req.body.username}).insertOne(data).then(n => {

        res.format({
            'json': function () {
                res.status(201).json(data);
            }
        });
    });


  
});

//add highscore to player
router.post("sudoku/new_game", function(req, res) {
    let data = {username: req.body.username, diff: req.body.diff, score: req.body.score};


    model.username.findOne({username: req.body.username}).insertOne(data).then(n => {

        res.format({
            'json': function () {
                res.status(201).json(data);
            }
        });
    });


  
});