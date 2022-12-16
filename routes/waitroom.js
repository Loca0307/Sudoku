const express = require('express');
const session = require('express-session');
const { read } = require('fs-extra');
const { io } = require('../app');
const router = express.Router();
module.exports = router;
let level;


const ObjectId = require('mongodb').ObjectId;


let { model } = require("../model");

let lobbies = require("../model/lobbies");

//not sure if route should be /waitroom instead
router.get("/:roomID", function (req, res) { 
    if (req.session.username) {
        let roomID = req.params.roomID;
        let username = req.session.username;
        
        lobbies.lobbies.forEach(lobby => {
            if (lobby.id == roomID) {
                if (!lobby.connected_players.player.includes(username)) {
                    // YOU ARE NOT IN THIS LOBBY => JOIN LOBBY
                    lobbies.joinLobby(lobby.id,username);
                }
                res.format({
                    'text/html': function () {
                        res.render("waitroom", {lobby: lobby}); // render the waitroom.ejs page
                    },
                    'application/json': function () {
                        res.status(201).json(lobby); // passing all the parameters
                    }
                });
            }
        });
    }
    else {
        res.redirect('/');
    }
        
});

router.post("/", function(req, res) {
    if (req.session.username) {
        let lobby = lobbies.createLobby(req.session.username,parseInt(req.body.size),parseInt(req.body.mpdiff));
        res.format({
                    'text/html': function () {
                    res.redirect(302, `/waitroom/${lobby.id.toString()}`); // render the waitroom.ejs page
                    },
                    'application/json': function () {
                    res.status(201).json(lobby); // passing all the parameters
                    }
                });
    }
    else {
        res.redirect('/');
    }
});