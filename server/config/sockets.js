const sockets = require('socket.io');

module.exports = (server) => {
  const io = sockets(server);
  io.on('connection', (socket) => {
    console.log('user connected');
    // let addedUser = false;
    // const room = {}, users = {};

    socket.on('new message', (data) => {
      // we tell the client to execute 'new message'
      console.log(socket);
      console.log(data);
      console.log('I sent it');
    });
  });
}