const sockets = require('socket.io');

var num = 0;
const users = {};

module.exports = (server) => {
  const io = sockets(server);
  io.on('connection', (socket) => {
    console.log(++num, 'users online');

    socket.on('join', data => {
      const userId = data.userId;

      // join relevant channels (rooms)
      data.roomIds.forEach(roomId => {
        socket.join(roomId);
        socket.broadcast.in(roomId).emit('new user', { roomId, userId }); // TODO: use user-specific data to show WHO'S online in a room
      });
    });

    socket.on('new message', (data) => {
      socket.broadcast.in(data.roomId).emit('new message', data);
    });
  });
}