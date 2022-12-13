const io = require('socket.io')();

// track users and sockets
let map_user_socket = {};