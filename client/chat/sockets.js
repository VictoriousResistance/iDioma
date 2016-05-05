import * as actions from './actions/index';

export const socket = window.io();

export default function (store) {
  socket.on('new message', msg => {
    store.dispatch(actions.addMsg(msg));
  });
}

