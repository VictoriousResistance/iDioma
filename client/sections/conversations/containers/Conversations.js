import { connect } from 'react-redux';
import Conversations from '../components/Conversations.jsx';
import { addMsg, changeInputText } from '../actions/index.js';

import { socket } from '../sockets.js';

const mapStateToProps = (state) => (
  {
    user: state.profile,
    rooms: state.rooms,
    messages: state.messages,
    inputText: state.inputText,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    handleOnSend: (msg) => {
      // send it
      socket.emit('new message', msg);
      // add it
      dispatch(addMsg(msg));
      // clear Input
      dispatch(changeInputText(''));
    },

    handleTextInput: (event) => {
      dispatch(changeInputText(event.target.value));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);
