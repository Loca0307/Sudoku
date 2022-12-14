const express = require('express');
const router = express.Router();
module.exports = router;



const ObjectId = require('mongodb').ObjectId;


let {model} = require("../model");


router.post("/sudoku", function(req,res) {

    let userprofiledata = {username: req.body.username, password: req.body.password}; 

        model.usernames.findOne({username : userprofiledata.username}).then(userdata => {
            if (userdata) {
                if(userdata.password == req.body.password) {
                    res.format({
                        'text/html': function () {
                            res.render("middle", {message : `<h2>Welcome back, ${userprofiledata.username}!</h2><h4>We really missed you since the last time you were with us.</h4>`,userprofiledata});
                        },
                        'application/json': function () {
                            res.status(201).json(userprofiledata);
                        }
                    });
                }
                else {
                    res.render("index", {msg:'<p style="color : red;"> Username found, wrong password </p>'});
                }
            }
            else {
                //TODO: First time login, Create user data table 
                // var user = 
                model.usernames.insertOne(userprofiledata).then(userdata => {

                    res.format({
                        'text/html': function () {
                            res.render("middle", {message : `<h2>First time? Welcome, ${userprofiledata.username}!</h2><h4>We have taken the liberty to register an account for you. next time you can login with the same username and password you entered.</h4>`,userprofiledata});
                        },
                        'application/json': function () {
                            res.status(201).json(userprofiledata);
                        }
                    });
                
                }); 
            }
        });
});

router.post("/sudoku/solo_game", function(req,res) {

    let pagedata = {username: req.body.username, diff: req.body.diff, password: req.body.password, score: 0};

        model.usernames.findOne({username : pagedata.username}).then(userdata => {
            if (userdata) {
                if (userdata.password == pagedata.password)
                {
                    res.format({
                        'text/html': function () {
                            res.render("solodoku", {message : "Solo game started, ", pagedata});
                        },
                        'application/json': function () {
                            res.status(201).json(pagedata);
                        }
                    });
                }
            }
    });
});

router.get("/sudoku/test_high_scores", function(req,res) {

                    res.format({
                        'text/html': function () {
                            res.render("high_scores");
                        },
                        'application/json': function () {
                            res.status(201).json(pagedata);
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
        username: req.query.username, // username
        diff: req.query.diff, // difficulty
        size: req.query.size // number of the players 2/2 for now

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


router.post("/waitroom", function(req, res) {
    //we need to agree on data being passed
    let data = {
        username: req.body.username, // username
        diff: req.body.diff, // difficulty
        size: req.body.size, // number of the players 2/2 for now
        ready: 1,
        
    }


    res.format({
        'text/html': function () {
            res.render("waitroom", data); // render the waitroom.ejs page
        },
        'application/json': function () {
            res.status(201).json(data); // passing all the parameters
        }
    
    });

    
})

