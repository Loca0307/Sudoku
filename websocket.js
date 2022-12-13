const io = require('socket.io')();

// track users and sockets
let map_user_socket = {};

function init(server) {

    io.attach(server);
  
    io.on('connection', function (socket) {
  
      console.log("player: " + socket.id + " connected");
  
      if (io.sockets.sockets.size >= 2) {
        console.log("there are already 2 players so enjoy!");
      }
  
      let currentPlayer = 1;
  
      const playerId = socket.id;
      getPlayers(playerId);
  
      const id = getId(players, playerId);
      console.log("id", {id})
      socket.emit("playerId", id);
  
      socket.on('disconnect', function () {
        console.log('player ' + id + ' disconnected');
        let key = getId(players, socket.id)
        players[key] = "";
      });
      
      let players_ready = playernames(map_user_socket);
      socket.on('multiplayer_connected', (player) => {
        Object.keys(map_user_socket).forEach((a) => {
            io.to(a).emit('multiplayer_connected', [players_ready]);
        });


    });

});
}

function getPlayers(playerId) {
    for (const i in players) {
      let curr = players[i];
      if (curr == "") {
        players[i] = playerId;
        console.log(players)
        return;
      }
    }
  }

function playernames(val) {
    let a = Object.keys(val).map(function (key) {
        return val[key];
    });
    return a;
}
  
  function getId(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
  }
  
  module.exports.init = init;
    
