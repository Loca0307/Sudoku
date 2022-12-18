// server side

const { model } = require('../model');


const io = require('socket.io')();

// track users and sockets
let map_user_ready = {}; // players that clicked on ready 
let currentPlayer = 0;
let playerId = 0;
let q = [];

let players = [];

/* state {
  board : board,

 } */

// use .shift() to obtain head of que 

function socket_init(server) {
    io.attach(server);

    io.on('new_lobby', function (lobby) {
        console.log("new lobby created");
        console.log(lobby);
    });

    io.on('connection', function (socket) {

      socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
      });

    // p = { id: socket.id, difficulty: 1 , room: 2};
    // q.push(p);
    
    console.log("player: " + socket.id + " connected");




   

    // if (io.sockets.sockets.size >= 2) {
    //     console.log("there are already 2 players so enjoy!");
    // }

    


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

    //keeping track on howmany players waiting in the room
    socket.on('multiplayer_connected', function () {
      console.log('player ' + socket.id + ' connected');
      map_user_ready[socket.id] = true;
      let ready = Object.keys(map_user_ready).length;
      Object.keys(map_user_ready).forEach((a) => {
        console.log(a);
        io.to(a).emit('multiplayer_connected', ready);
      });
    });

    socket.on('multiplayer_start', function () {
      if (q.length >= 2) {
        let p1 = q.shift();
        let p2 = q.shift();
      }


    } )

  
  

    //socket.onmessage = ({data}) => {
    //  socket.forEach(function each(client) {
    //  if (client !== ws && client.readyState === WebSocket.OPEN) {
    //    client.send(`${data}`);
    //  }
    //});

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

io.on('newsocketuserconnectedorsomething', function (socket) {
  console.log("SOCKET STUFF: new player is announcing socket user relations: ");
  players.push(socket);

});

function getUserSocketList() {
  io.sockets.emit('plsannounceuser');
  return players;
}



module.exports = {
  getUserSocketList : getUserSocketList,
  socket_init : socket_init
};