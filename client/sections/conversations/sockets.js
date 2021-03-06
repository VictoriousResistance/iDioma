import * as conversationActions from './actions/';
import * as connectionsActions from '../connections/actions/';
import * as connectionRequestsActions from '../connectionRequests/actions/';
import io from 'socket.io-client';


// if (process.env.PORT) {
const socketIO = io.connect('https://idioma.live', { secure: true });
// } else {
//   socketIO = io.connect('localhost:5678');
// }

export default function (store, renderTwilio) {
socketIO.emitMsg = (msg) => {
  socketIO.emit('new message', msg);
};

socketIO.enterRoom = (user, room) => {
  socketIO.emit('enter room', room);
};

  const dispatch = store.dispatch;
  // initialize user and enter rooms server-side
  const state = store.getState();
  const userId = state.profile.id;
  const roomIds = state.rooms.map(room => room.id);
  
  socketIO.on('connect', renderTwilio);

  socketIO.emit('join', { userId, roomIds });

  // add socket listener

  socketIO.on('render React', () =>
    console.log(new Date())
  );

  socketIO.on('new message', msg => {
    dispatch(conversationActions.addMsg(msg));
  });

  socketIO.on('online room', data => {
    dispatch(conversationActions.updateOnlineNow(data.roomId, data.numOnline));
  });

  socketIO.on('online user', data => {
    dispatch(connectionsActions.showOnlineNow(data.userId)); // FIXME WHY IS THIS TRIGGERING CONNECTION REQUESTS, TOO?
    // dispatch(connectionRequestsActions.showOnlineNow(data.userId));
  });
}

export const socket = socketIO;

/*
TODO: join new room
new message incoming should open new room
get others online now
*/

