const express = require('express');
const session = require('express-session');
const { read } = require('fs-extra');
const { io } = require('../app');
const router = express.Router();
module.exports = router;

const websocket = require('../server_scripts/websocket');


const ObjectId = require('mongodb').ObjectId;


let { model } = require("../model");
const {getUserSocketList} = require('../server_scripts/websocket');

let lobbies = require("../model/lobbies");

//not sure if route should be /waitroom instead
router.get("/:roomID", function (req, res) { 
    if (req.session.username) {
        userdata = {
            username : req.session.username
        }
        let roomID = req.params.roomID;
        let username = req.session.username;
        
        lobbies.lobbies.forEach(lobby => {
            if (lobby.id == roomID) {
                let playerIsInRoom = false;
                lobby.connected_players.forEach(connected_player => {
                    if (connected_player.player == username) {
                        playerIsInRoom = true;
                    }
                });
                if (!playerIsInRoom) {
                    // YOU ARE NOT IN THIS LOBBY => JOIN LOBBY
                    lobbies.joinLobby(lobby.id,username);
                }
                websocket.reloadLobbies();
                res.format({
                    'text/html': function () {
                        res.redirect("/sudoku"); // render the waitroom.ejs page
                    },
                    'application/json': function () {
                        res.status(201).json({
                            lobbies : lobbies.lobbies,
                            userdata
                        }); // passing all the parameters
                    }
                });
            }
        });
    }
    else {
        res.redirect('/');
    }
        
});

router.get("/leave/:roomID", function (req, res) { 
    if (req.session.username) {
        userdata = {
            username : req.session.username
        }
        let roomID = req.params.roomID;
        let username = req.session.username;
        
        lobbies.lobbies.forEach(lobby => {
            if (lobby.id == roomID) {

                lobbies.exitLobby(roomID,username);
                websocket.reloadLobbies();
                res.format({
                    'text/html': function () {
                        res.redirect("/sudoku"); // render the waitroom.ejs page
                    },
                    'application/json': function () {
                        res.status(201).json({
                            lobbies : lobbies.lobbies,
                            userdata
                        }); // passing all the parameters
                    }
                });
            }
        });
    }   
});

router.post("/", function(req, res) {
    if (req.session.username) {
        userdata = {
            username : req.session.username
        }
        let lobby = lobbies.createLobby(req.session.username,parseInt(req.body.size),parseInt(req.body.mpdiff));
        websocket.reloadLobbies();
        res.format({
                    'text/html': function () {
                    res.redirect(302, `/waitroom/${lobby.id.toString()}`); // render the waitroom.ejs page
                    },
                    'application/json': function () {
                    res.status(201).json({
                        lobbies : lobbies.lobbies,
                        userdata
                    }); // passing all the parameters
                    }
                });
    }
    else {
        res.redirect('/');
    }
});

router.get("/", function(req, res) {
    if (req.session.username) {
        userdata = {
            username : req.session.username
        }
        res.format({
                    'text/html': function () {
                        res.redirect('/sudoku');
                    },
                    'application/json': function () {
                    res.status(201).json(
                        {
                            lobbies : lobbies.lobbies,
                            userdata
                        }
                    ); // passing all the parameters
                    }
                });
    }
    else {
        res.redirect('/');
    }
});