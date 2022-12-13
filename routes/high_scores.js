const express = require('express');
const router = express.Router();
module.exports = router;

let {model} = require("../model");


router.post("/", (req, res) => {
    let obj = {
        player: req.body.player,
        score: Number.parseInt(req.body.score)
    }
    model.high_scores.inserOne(obj).then(high_scores => {
        res.format({'text/html' : () => {
            res.redirect("/index.html");
        },
        'application/json' : () => {
            res.status(201).json(obj);
        }
    })
    })
})

router.get(["/", "index", "/index.html"], (req, res) => {

    model.high_scores.find({}).toArray().then((high_scores)=> {
        res.format({
            'text/html': () => {
                res.render("", high_scores);
                },
            'application/json' : () => {
                res.json(high_scores);
            }
        })
    });
});