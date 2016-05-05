import { combineReducers } from 'redux';
import connections from '../connections/reducers/connections.js';
import connectionRequests from '../connectionRequests/reducers/connectionRequests.js';
import matches from '../matches/reducers/matches.js';
import profile from '../profile/reducers/profile.js';
import rooms from '../conversations/reducers/rooms.js';
import messages from '../conversations/reducers/messages.js';

const rootReducer = combineReducers({
  messages,
  rooms,
  connections,
  connectionRequests,
  matches,
  profile,
});

export default rootReducer;
