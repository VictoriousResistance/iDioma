import { combineReducers } from 'redux';
import connections from './connections.js';
import connectionRequests from './connectionRequests.js';
import matches from './matches.js';
import profile from './profile.js';
import rooms from '../chat/reducers/rooms.js';
import messages from '../chat/reducers/messages.js';

const rootReducer = combineReducers({
  messages,
  rooms,
  connections,
  connectionRequests,
  matches,
  profile,
});

export default rootReducer;
