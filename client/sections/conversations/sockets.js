import * as conversationActions from './actions/';
import * as connectionsActions from '../connections/actions/';
import * as connectionRequestsActions from '../connectionRequests/actions/';
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
    dispatch(conversationActions.addMsg(msg));
  });

  socket.on('online room', data => {
    dispatch(conversationActions.updateOnlineNow(data.roomId, data.numOnline));
  });

  socket.on('online user', data => {
    dispatch(connectionsActions.showOnlineNow(data.userId));
    dispatch(connectionRequestsActions.showOnlineNow(data.userId));
  });
}

export const socket = socketIO;

/*
TODO: join new room
new message incoming should open new room
get others online now
leave room
*/

