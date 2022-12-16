const express = require('express');
const router = express.Router();
module.exports = router;

let {model} = require("../model");


router.post("/high_scores/solo", function (req, res) {
    var highscore = {
        username : req.body.username,
        game : req.body.game,
        dateplayed : req.body.dateplayed,
        boardObjHistory : req.body.boardObjHistory,
        totalMoves : req.body.totalMoves,
        score : req.body.score
        
    }

    model.high_scores.insertOne(highscore).then(ans => {
                res.format({
                    'application/json': function () {
                        console.log(ans);
                        res.status("201").json(ans);
                    }
        });
    });
});


