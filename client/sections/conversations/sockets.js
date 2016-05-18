import * as actions from './actions/';
import io from 'socket.io-client';

let socketIO;

// if (process.env.PORT) {
  socketIO = io.connect('https://idioma.live', { secure: true });
// } else {
//   socketIO = io.connect('localhost:5678');
// }

socketIO.emitMsg = (msg) => {
  socketIO.emit('new message', msg);
};

socketIO.enterRoom = (user, room) => {
  socketIO.emit('enter room', room);
};

export default function (store) {
  const dispatch = store.dispatch;
  // initialize user and enter rooms server-side
  const state = store.getState();
  const userId = state.profile.id;
  const roomIds = state.rooms.map(room => room.id);
  socket.emit('join', { userId, roomIds });

  // add socket listeners
  socket.on('new message', msg => {
    dispatch(actions.addMsg(msg));
  });

  socket.on('online now', roomId => {
    console.log('got it');
    dispatch(actions.incrementOnlineNow(roomId));
  });
}

export const socket = socketIO;

/*
TODO: join new room
new message incoming should open new room
leave room
online now
*/

