const io = require("socket.io")();
console.log('server loaded');

io.on('connection', (socket) => {
    console.log('client connected: ', socket.id);
  
    socket.on('disconnect', () => {
      console.log('client disconnected');
    });
});

module.exports = {
    io : io
}