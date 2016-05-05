const sockets = require('socket.io');

module.exports = (server) => {
  const io = sockets(server);
  io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new message', (data) => {
      socket.broadcast.emit('new message', data);
      console.log('I sent it');
    });
  });
}