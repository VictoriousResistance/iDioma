import { combineReducers } from 'redux';
import connections from './connections.js';
import connectionRequests from './connectionRequests.js';
import matches from './matches.js';
import profile from './profile.js';

const rootReducer = combineReducers({
  connections,
  connectionRequests,
  matches,
  profile,
});

export default rootReducer;
