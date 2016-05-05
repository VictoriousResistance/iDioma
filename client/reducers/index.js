import { combineReducers } from 'redux';
import connections from './connections.js';
import connectionRequests from './connectionRequests.js';
import matches from './matches.js';
import profile from './profile.js';
import conversations from '../chat/reducers/conversations.js';
import messages from '../chat/reducers/messages.js';

const rootReducer = combineReducers({
  activeRoomMsgs: messages,
  conversations,
  connections,
  connectionRequests,
  matches,
  profile,
});

export default rootReducer;
