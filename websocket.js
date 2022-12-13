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
  
      // let started = false;
      let currentPlayer = 1;
  
      const playerId = socket.id;
      getPlayers(playerId);
  
      const id = getId(players, playerId);
      console.log("id", {id})
      socket.emit("playerId", id);
  
      // if (started) {
      //   socket.emit('continue', currentPlayer, getString())
      // }
  
      socket.on('disconnect', function () {
        console.log('player ' + id + ' disconnected');
        let key = getId(players, socket.id)
        players[key] = "";
      });


    });
}
    


