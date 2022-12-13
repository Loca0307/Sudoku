const express = require('express');
const router = express.Router();
module.exports = router;



const ObjectId = require('mongodb').ObjectId;


let {model} = require("../model");


router.post("/sudoku/new_game", function(req,res) {

    let pagedata = {username: req.body.username, diff: req.body.diff, score:0};
    let userprofiledata = {username: req.body.username, password: req.body.password}; 

    //TODO: Login verification
    //get information from the 
    //res.render("sudoku", {PASS PLAYER AND DIFFICULTY INFORMATION AFTER LOGIN} );

    //TODO: Call sudokumodel (model/sudoku.js) to set up the game

        model.usernames.findOne({username : userprofiledata.username}).then(userdata => {
            if (userdata) {
                if(userdata.password == req.body.password) {
                    res.format({
                        'text/html': function () {
                            res.render("solodoku", {message : "Welcome back, ", pagedata});
                        },
                        'application/json': function () {
                            res.status(201).json(pagedata);
                        }
                    });
                }
                else {
                    res.render("index", {msg:'<p style="color : red;"> wrong password </p>'});
                }
            }
            else {
                //TODO: First time login, Create user data table 
                // var user = 
                model.usernames.insertOne(userprofiledata).then(userdata => {

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

    let pagedata = {username: req.body.username, diff: req.body.diff, score:0, password: req.body.password};
    let userprofiledata = {username: req.body.username, password: req.body.password}; 

    //TODO: Login verification
    //get information from the 
    //res.render("sudoku", {PASS PLAYER AND DIFFICULTY INFORMATION AFTER LOGIN} );

    //TODO: Call sudokumodel (model/sudoku.js) to set up the game

        model.usernames.findOne({username : userprofiledata.username}).then(userdata => {
            if (userdata) {
                if(userdata.password == req.body.password) {
                    res.format({
                        'text/html': function () {
                            res.render("solodoku", {message : "Welcome back, ", pagedata});
                        },
                        'application/json': function () {
                            res.status(201).json(pagedata);
                        }
                    });
                }
                else {
                    res.render("index", {msg:'<p style="color : red;"> wrong password </p>'});
                }
            }
            else if (!userdata) {
                //TODO: First time login, Create user data table 
                // var user = 
                model.usernames.insertOne(userprofiledata).then(userdata => {

                    res.format({
                        'text/html': function () {
                            res.render("solodoku", {message : "First time? Welcome, ", pagedata});
                        },
                        'application/json': function () {
                            res.status(201).json(pagedata);
                        }
                    });
                
                }); 
            }
            else {
                
            }
        });
});


router.get("/sudoku/test_game", function(req,res) {
    pagedata = {username: '', diff: 999, score: 'YOU SHOULD NOT BE HERE, LEAVE!'};
    res.render("solodoku",{message : "OLD PAGE, PLEASE USE 'PLAY SOLO' FROM HOMEPAGE", pagedata});
});


//not sure if route should be /waitroom instead
router.get("/waitroom", function(req, res) {
    //we need to agree on data being passed
    let data = {
        username: req.body.username, // username
        diff: req.body.diff, // difficulty
        lobby: req.body.lobby, // number of the players 2/2 for now
    
    }
    res.format({
        'text/html': function () {
            res.render("waitroom"); // render the waitroom.ejs page
        },
        'application/json': function () {
            res.status(201).json(data); // passing all the parameters
        }
    
    });

    
})

