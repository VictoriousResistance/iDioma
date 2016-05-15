import * as actions from './actions/';
import io from 'socket.io-client';

export const socket = io();

socket.emitMsg = (msg) => {
  socket.emit('new message', msg);
};

socket.enterRoom = (user, room) => {
  socket.emit('enter room', room);
};

export default function (store) {
  // add socket listeners
  socket.on('new message', msg => {
    store.dispatch(actions.addMsg(msg));
  });
}
