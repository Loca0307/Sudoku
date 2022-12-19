// server side

const io = require('socket.io')();

const e = require('express');
const { check } = require('fast-check');
let lobbies = require("../model/lobbies");
let multidoku = require("./multidoku");

let {model} = require("../model/");

let players = [];

function socket_init(server) {
    io.attach(server);

    io.on('connection', function (socket) {

      console.log("player: " + socket.id + " connected");


      socket.on('announce-connect', function (username) {
        let player = {
          username : username,
          sock : socket
        }
        const itemIndex = players.findIndex(o => o.username === player.username);
        if(itemIndex > -1) {
              players[itemIndex] = player;
        } else {
              players.push(player);
        }
        
        console.log('\n');
        console.log("PLAYERS ARRAY: ");
        players.forEach(p => {
          console.log("username: "+p.username + " socket id: " + p.sock.id);
        });
      });

      socket.on('chat', function (data) {
        let username = data.username;
        let text = data.text;
        lobbies.lobbies.forEach(lobby => {
          lobby.connected_players.forEach(p => {
            if (p.player == username) {
              lobby.chat.push({
                player : username,
                message : text});
            }
          });
        });
        reloadLobbies();
      });

      socket.on('game-update', function (data) {
        lobbies.lobbies.forEach(lobby => {
          lobby.connected_players.forEach(p => {
            if (p.player == data.username) {
              let currentBoardObj = p.boardObjArray[p.boardObjArray.length - 1];
              let fullboard = [];
              let correctIndexes = [];
              let wrongIndexes = [];
              for (let i = 0; i < 81; i++) {
                if (data.boardarr[i] != '') {
                  fullboard.push(data.boardarr[i]);
                }
                else {
                  fullboard.push(0);
                }
              }

              currentBoardObj.playerNumberIndexes.forEach(index => {
                let guessedBefore = false;
                if (fullboard[index] == lobby.correctedSudoku[index]) {
                  lobby.firsts.forEach(f => {
                    if (f.index == index) {
                      //somebody guessed this before you
                      guessedBefore = true;
                    }
                  });
                  if (!guessedBefore) {
                    f = {
                      index : index
                    }
                    lobby.firsts.push(f);
                    p.guessedFirst.push(index);
                  }
                  correctIndexes.push(index);
                } else {
                  if (fullboard[index] != 0) {
                    wrongIndexes.push(index);
                  }
                }
              });
              var newBoardObj = {
                fullboard : fullboard,
                correctIndexes : correctIndexes,
                wrongIndexes : wrongIndexes,
                hintIndexes : [],
                givenNumberIndexes : currentBoardObj.givenNumberIndexes,
                playerNumberIndexes : currentBoardObj.playerNumberIndexes,
                score : p.guessedFirst.length * 5,
                time : 0,
              }
              
              p.boardObjArray.push(newBoardObj);
              //TODO: check if p has won
              if (correctIndexes.length == currentBoardObj.playerNumberIndexes.length) {
                //GAMEOVER
                console.log('GAME OVER');
                lobby.gameOver = true;
                lobby.winner = p.player;

                //save to db
                model.multi_high_scores.insertOne(lobby);
              }
            }
          });
        });
        lobbies.lobbies.forEach(lobby => {
          lobby.connected_players.forEach(p => {
            if (playerSocket(p.player)) {
                playerSocket(p.player).emit('update-game',{p , lobby});
            }
          });
        });
      });

      socket.on('disconnect', function () {});




    });

    return io;
}

function reloadLobbies(){
  io.sockets.emit("reloadlobby");
  lobbies.lobbies.forEach(lobby => {
    if (checkIfLobbyFull(lobby) && lobby.lobbyOpen) {
      //START GAME

      lobby.lobbyOpen = false;

      let game = multidoku.createGame(lobby.lobbyDiff);
      lobby.correctedSudoku = game.CorrectSudokuForChecking;
      let fullboard = game.board;
      let givenNumberIndexes = [];
      let playerNumberIndexes = [];
      for (let i = 0; i < fullboard.length;i++){
        if (fullboard[i] != 0) {
          givenNumberIndexes.push(i);
        } else {
          playerNumberIndexes.push(i);
        }
      }

      lobby.connected_players.forEach(p => {
        let username = p.player;
        var currentBoardObj = {
          fullboard : fullboard,
          correctIndexes : [],
          wrongIndexes : [],
          hintIndexes : [],
          givenNumberIndexes : givenNumberIndexes,
          playerNumberIndexes : playerNumberIndexes,
          score : 0,
          time : 0,
        }
        p.boardObjArray.push(currentBoardObj);

        if (playerSocket(username)) {
          playerSocket(username).emit('start-game',p);
        }
      });
    }
  });
}

function playerSocket(username) {
  for(let i = 0; i < players.length; i++) {
    if (players[i].username == username) {
      return players[i].sock;
    }
  }
  return;
}

function playerUsername(socket) {
  for(let i = 0; i < players.length; i++) {
    if (players[i].sock.id == socket.id) {
      return players[i].username;
    }
  }
  return;
}

function checkIfLobbyFull(lobby) {
  if (lobby.lobbySize <= lobby.connected_players.length) {
    return true;
  }
  return false;
}

function startGame(lobby) {
    lobby.lobbyOpen = false;
    lobby.connected_players.forEach(p => {
      let username = p.player;
      let sock = p.sock;
      sock.emit('test');
    });
}

module.exports = {
  socket_init,
  reloadLobbies
};