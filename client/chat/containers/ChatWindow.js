import { connect } from 'react-redux';
import ChatWindow from '../components/ChatWindow.jsx';
import { addMsg } from '../actions/index.js';

import { socket } from '../sockets.js';

const mapStateToProps = (state) => (
  {
    conversations: state.conversations,
    messages: state.activeRoomMsgs,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    sendMsg: (msg) => {
      socket.emit('new message', msg);
      dispatch(addMsg(msg));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);
