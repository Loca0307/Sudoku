const io = require('socket.io')();

// track users and sockets
let map_user_ready = {}; // players that clicked on ready 
let currentPlayer = 0;
let playerId = 0;


function socket_init(server) {
    io.attach(server);

    io.on('connection', function (socket) {
    
    console.log("player: " + socket.id + " connected");

    if (io.sockets.sockets.size >= 2) {
        console.log("there are already 2 players so enjoy!");
    }

    currentPlayer = 1;
/*
    playerId = socket.id;
    getPlayers(playerId);

    const id = getId(players, playerId);
    console.log("id", {id})
    socket.emit("playerId", id);*/

    
    socket.on('disconnect', function () {
      //console.log('player ' + id + ' disconnected');
      //let key = getId(players, socket.id)
      if(map_user_ready[socket.id]) {
        delete map_user_ready[socket.id];
      }
      let ready = Object.keys(map_user_ready).length;
      io.emit('multiplayer_disconnected', ready);
    });

    socket.on('multiplayer_connected', function () {
      console.log('player ' + socket.id + ' connected');
      map_user_ready[socket.id] = true;
      let ready = Object.keys(map_user_ready).length;
      Object.keys(map_user_ready).forEach((a) => {
        console.log(a);
      io.to(a).emit('multiplayer_connected', ready);
      });
      
    })

}

)

return io;
}
/*
function getPlayers(playerId) {
    for (const i in players) {
      let curr = players[i];
      if (curr == "") {
        players[i] = playerId;
        console.log(players)
        return;
      }
    }
}*/


function getId(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
}


module.exports.socket_init = socket_init;