const express = require('express');
const { read } = require('fs-extra');
const router = express.Router();
module.exports = router;

let level;
var sess;


const ObjectId = require('mongodb').ObjectId;


let {model} = require("../model");

//called when the login form is sent
router.post("/sudoku", function(req, res) {
    let userprofiledata = {username: req.body.username, password: req.body.password}; 

        model.usernames.findOne({username : userprofiledata.username}).then(userdata => {
            if (userdata) {
                if(userdata.password == req.body.password) {

                    //initiate a session if login information is correct
                    sess = req.session;

                    //save username as cookie
                    sess.username = req.body.username;

                    
                    //once cookie is saved redirect to the /sudoku with a GET request
                    res.format({
                        'text/html': function () {
                            res.redirect('/sudoku');
                        },
                        'application/json': function () {
                            res.status(201).json(userprofiledata);
                        }
                    });
                }
                else {
                    //password entered was wrong
                    res.render("index", {msg:'<p style="color : red;"> Username found, wrong password </p>'});
                }
            } else {
                //userdata not found AKA user is not registered.
            }
        });
    });

router.get("/sudoku", function(req,res) {
    if (sess.username) {
        model.usernames.findOne({username : sess.username}).then(userdata => {
            if (userdata) {
                    model.lobbies.find({}).toArray().then(lobbies => {
                        console.log(lobbies);
                        res.format({
                            'text/html': function () {
                                console.log( lobbies );
                                res.render("middle", {
                                    message : `<h2>Welcome back, ${userdata.username}!</h2><h4>We really missed you since the last time you were with us.</h4>`,
                                    userdata,
                                    lobbies
                                });
                            },
                            'application/json': function () {
                                res.status(201).json(userprofiledata);
                            }
                    });
                });
            }
        });
    }
    else {
        res.redirect('/');
    }
});
    

router.post("/sudoku/solo_game", function(req,res) {

    let pagedata = {username: req.body.username, diff: req.body.diff, password: req.body.password, score: 0};

        model.usernames.findOne({username : pagedata.username}).then(userdata => {
            if (userdata) {
                if (userdata.password == pagedata.password)
                {
                    res.format({
                        'text/html': function () {
                            // res.redirect('/sudoku');
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

router.get("/sudoku/high_scores/:user", function(req,res) {
    let user = req.params.user;
    model.high_scores.find({username : user}).sort({score : -1}).toArray().then( high_scores => { 
        console.log(high_scores);
        res.format({
            'text/html': function () {
                res.render("high_scores", {high_scores});
            },
            'application/json': function () {
                res.status(201).json(high_scores);
            }
        });
    });
});

router.post("/high_scores", function(req,res) {
    let pagedata = {username: req.body.username, diff: req.body.diff, score: 0};
    model.high_scores.findOne({username : user}).toArray().then( high_scores => {
                res.format({
                    'text/html': function () {
                        res.render("high_scores");
                    },
                    'application/json': function () {
                        res.status(201).json(pagedata);
                    }
                });
         });
});



router.get("/sudoku/test_game", function(req,res) {
    pagedata = {username: '', diff: 999, score: 'YOU SHOULD NOT BE HERE, LEAVE!'};
    res.render("solodoku",{message : "OLD PAGE, PLEASE USE 'PLAY SOLO' FROM HOMEPAGE", pagedata});
});



//
router.get("/multidoku", function(req, res) {
    //we need to agree on data being passed

    const data = {
        diff: level
    }
    // we have to pass the loby room get it from url pass it to multidoku and from multidoku we get  the info from the database 
    // and pass it to multidoku 
    const ready = parseInt(req.query.ready);
    console.log(req.query);
    res.format({
    
        'text/html': function () {
            if(ready === 2) {
                res.render("multidoku", data);
            }
        },

        'application/json': function () {
            console.log(json(data))
            res.status(201).json(data); // passing all the parameters
        }

    });

})


/* router.get("/public/client_scripts", function(req, res) {
    //we need to agree on data being passed
    
    res.format({
    
        'text/html': function () {
            res.render("multiplayer");
            
        },

        'application/json': function () {
            res.status(201).json(multiplayer); 
        }

    });

})  */


