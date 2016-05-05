import { combineReducers } from 'redux';
import conversations from './conversations.js';
import messages from './messages.js';

const chatReducer = combineReducers({
  conversations,
  activeRoomMsgs: messages,
});

export default chatReducer;
