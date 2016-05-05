import { combineReducers } from 'redux';
import connections from './sections/connections/reducers/connections.js';
import connectionRequests from './sections/connectionRequests/reducers/connectionRequests.js';
import matches from './sections/matches/reducers/matches.js';
import profile from './sections/profile/reducers/profile.js';
import rooms from './sections/conversations/reducers/rooms.js';
import messages from './sections/conversations/reducers/messages.js';

const rootReducer = combineReducers({
  messages,
  rooms,
  connections,
  connectionRequests,
  matches,
  profile,
});

export default rootReducer;
