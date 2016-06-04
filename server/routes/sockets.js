const sockets = require('socket.io');

var num = 0;
// constant lookup for active users and rooms
const users = {};
const rooms = {};

module.exports = (server) => {
  const io = sockets(server);
  io.on('connection', (socket) => {
    // send back that it's ready -> mount React components
    console.log(`${++num} users online`);

    socket.on('join', data => {
      console.log('JOINED');
      const userId = socket.userId = data.userId;

      // add user to master users obj
      users[userId] = [];

      // join relevant channels (rooms)
      data.roomIds.forEach(roomId => {
        socket.join(roomId);

        rooms[roomId] = rooms[roomId] || 0;
        users[userId].push(roomId);
        // socket.nsp.in(roomId).emit('online room', { roomId, numOnline: rooms[roomId]++ });
      });
      // socket.broadcast.emit('online user', { userId });
    });

    socket.on('new message', (data) => {
      console.log('here');
      socket.broadcast.in(data.roomId).emit('new message', data);
    });

    socket.on('disconnect', () => {
      // users[socket.userId].forEach(roomId => rooms[roomId]--);
      delete users[socket.userId];
      console.log(`${--num} users online`);
    });
  });
};
