const express = require('express');
const router = express.Router();
module.exports = router;

let {model} = require("../model/");

let db = require("../model").model;

const ObjectId = require('mongodb').ObjectId;


router.get("/", function(req,res) {
    res.redirect("/index.html");
}); 

router.get(["/","/index.html","/index"], function(req, res) {
    console.log(req.query);
    res.render("index", {msg:'Enter the game!'});
});

/*
router.post('/index.html', function (req, res) {
    let data = {
        player: req.body.player
    }

    db.names.insertOne(data).then(() => {
        res.format({
            'json': function () {
              res.status(201).json(data);
            }
          })
    })
});

*/