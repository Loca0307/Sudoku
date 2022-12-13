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


//not sure if route should be /waitroom instead
router.get("/index/waitroom", function(req, res) {
    //we need to agree on data being passed
    let data = {
        users: req.body.users,
        ready: req.body.ready
    }
    res.render("waitroom", data); 
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