const express = require('express');
const router = express.Router();
module.exports = router;




let db = require("../model").model;
const ObjectId = require('mongodb').ObjectId;


let {model} = require("../model");


router.post("/sudoku/new_game", function(req,res) {

    let pagedata = {username: req.body.username, diff: req.body.diff, score:0};

    //TODO: Login verification
    //get information from the 
    //res.render("sudoku", {PASS PLAYER AND DIFFICULTY INFORMATION AFTER LOGIN} );

    //TODO: Call sudokumodel (model/sudoku.js) to set up the game

        model.usernames.findOne({username : pagedata.username}).then(userdata => {
            if (userdata){
                res.format({
                    'text/html': function () {
                        res.render("sudoku", {message : "Welcome back ", pagedata});
                    },
                    'application/json': function () {
                        res.status(201).json(pagedata);
                    }
                });
            }
            else {
                //TODO: First time login, Create user data table 
                // var user = 
                model.usernames.insertOne(pagedata).then(userdata => {

                    res.format({
                        'text/html': function () {
                            res.render("sudoku", {message : "First time? Welcome ", pagedata});
                        },
                        'application/json': function () {
                            res.status(201).json(pagedata);
                        }
                    });
                
                }); 
            }
        });
});

router.post("/sudoku/solo_game", function(req,res) {

    let pagedata = {username: req.body.username, diff: req.body.diff, score:0};

    //TODO: Login verification
    //get information from the 
    //res.render("sudoku", {PASS PLAYER AND DIFFICULTY INFORMATION AFTER LOGIN} );

    //TODO: Call sudokumodel (model/sudoku.js) to set up the game

        model.usernames.findOne({username : pagedata.username}).then(userdata => {
            if (userdata){
                res.format({
                    'text/html': function () {
                        res.render("sodukotest", {message : "Welcome back ", pagedata});
                    },
                    'application/json': function () {
                        res.status(201).json(pagedata);
                    }
                });
            }
        })
        
    
    
    res.render("sudoku");
});

                    res.format({
                        'text/html': function () {
                            res.render("sodukotest", {message : "First time? Welcome ", pagedata});
                        },
                        'application/json': function () {
                            res.status(201).json(pagedata);
                        }
                    });
                
                }); 
            }
        });
    });


  
});

//add highscore to player
router.post("sudoku/new_game", function(req, res) {
    let data = {username: req.body.username, diff: req.body.diff, score: req.body.score} 
        //password: req.body.password};


    model.username.findOne({username: req.body.username}).insertOne(data).then(n => {

        res.format({
            'json': function () {
                res.status(201).json(data);
            }
        });
    });


  
});