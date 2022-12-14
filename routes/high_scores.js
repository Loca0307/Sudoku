const express = require('express');
const router = express.Router();
module.exports = router;

let {model} = require("../model");

<<<<<<< Updated upstream
router.post("/high_scores/solo", function (req, res) {
    var highscore = {
        username : req.body.username,
        game : req.body.game,
        boardObjHistory : req.body.boardObjHistory,
        totalMoves : req.body.totalMoves
    }
=======

router.post("/sudoku", (req, res) => {
    let obj = {
        player: req.body.player,
        score: Number.parseInt(req.body.score)
    }
    model.high_scores.insertOne(obj).then(high_scores => {
        res.format({'text/html' : () => {
            res.redirect("/high_scores");
        },
        'application/json' : () => {
            res.status(201).json(obj);
        }
    })
    })
}) 

/* router.post("/sudoku", function(req,res) {
    let pagedata = {username: req.body.username, diff: req.body.diff, score: 0};

    model.high_scores.find({}).toArray().then((high_scores)=> {
        res.format({
            'text/html': function () {
                res.render("high_scores" , {
                high_scores: high_scores
            });
        },
            'application/json': function () {
                res.status(201).json(sudoku);
            }   
        }); 
    });
    
});
 */
router.get(["/", "index", "/index.html"], (req, res) => {
>>>>>>> Stashed changes

    model.high_scores.insertOne(highscore).then(ans => {
                res.format({
                    'application/json': function () {
                        console.log(ans);
                        res.status("201").json(ans);
                    }
        });
    });
});
