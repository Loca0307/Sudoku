const socket = io();

socket.on('connect', () => {
    console.log("socket.io connected");
});