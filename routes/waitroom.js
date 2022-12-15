const express = require('express');
const { read } = require('fs-extra');
const { io } = require('../app');
const router = express.Router();
module.exports = router;
let level;


const ObjectId = require('mongodb').ObjectId;


let {model} = require("../model");

//not sure if route should be /waitroom instead
router.get("/:roomId", function(req, res) {
    //we need to agree on data being passed
    model.lobbies.findOne({_id: ObjectId(req.params.roomId)}).then(lobby => {    
        res.format({
            'text/html': function () {
                res.render("waitroom", {lobby:lobby}); // render the waitroom.ejs page
            },
            'application/json': function () {
                res.status(201).json(lobby); // passing all the parameters
            }
        
        });
    });
    
})


router.post("/", function(req, res) {
    //we need to agree on data being passed
    
    let data = {
        username: 'John Doe', // username
        diff: parseInt(req.body.diff), // difficulty
        size: parseInt(req.body.size), // number of the players 2/2 for now
        ready: 1,
    }

    model.lobbies.insertOne(data).then(lobby => {
        //Inform the server about the new lobby
        res.format({
            'text/html': function () {
                res.redirect(302, `/waitroom/${lobby.insertedId.toString()}?create=true`); // render the waitroom.ejs page
            },
            'application/json': function () {
                res.status(201).json(data); // passing all the parameters
            }
        
        });
    });
})