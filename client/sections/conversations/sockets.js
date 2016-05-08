import * as actions from './actions/';

export const socket = window.io();

socket.emitMsg = (msg) => {
  socket.emit('new message', msg);
};

export default function (store) {
  // add socket listeners
  socket.on('new message', msg => {
    store.dispatch(actions.addMsg(msg));
  });
}
