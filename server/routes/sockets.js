const sockets = require('socket.io');

var num = 0;
// constant t lookup for active users and rooms
const users = {};
const rooms = {};

module.exports = (server) => {
  const io = sockets(server);
  io.on('connection', (socket) => {
    console.log(++num, 'users online');

    socket.on('join', data => {
      const userId = data.userId;

      // join relevant channels (rooms)
      data.roomIds.forEach(roomId => {
        socket.join(roomId);
        if (rooms[roomId]) {
          rooms[roomId].numOnline++;
          socket.nsp.to(roomId).emit('online now', roomId);
        } else {
          rooms[roomId] = { numOnline: 1, participants: {} };
          socket.broadcast.in(roomId).emit('online now', roomId); // TODO: use user-specific data to show WHO'S online in a room
        }
      });
    });

    socket.on('new message', (data) => {
      socket.broadcast.in(data.roomId).emit('new message', data);
    });
  });
}