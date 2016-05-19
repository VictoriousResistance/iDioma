import * as actions from './actions/';
import io from 'socket.io-client';

let socketIO;

if (process.env.PORT) {
  socketIO = io.connect('https://idioma.live', { secure: true });
} else {
  socketIO = io.connect('localhost:5678');
}

socketIO.emitMsg = (msg) => {
  socketIO.emit('new message', msg);
};

socketIO.enterRoom = (user, room) => {
  socketIO.emit('enter room', room);
};

export default function (store) {
  // add socket listeners
  socketIO.on('new message', msg => {
    store.dispatch(actions.addMsg(msg));
  });
}

export const socket = socketIO;
