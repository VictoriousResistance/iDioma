import { connect } from 'react-redux';
import Conversations from '../components/Conversations.jsx';
import { addMsg } from '../actions/index.js';

import { socket } from '../sockets.js';

const mapStateToProps = (state) => (
  {
    rooms: state.rooms,
    messages: state.messages,
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

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);
