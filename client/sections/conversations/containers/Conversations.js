import { connect } from 'react-redux';
import Conversations from '../components/Conversations.jsx';
import { emitMsg, addMsg, changeInputText, changeCurrentRoom } from '../actions/index.js';
import { socket } from '../sockets.js';

const mapStateToProps = (state) => (
  {
    user: state.profile,
    rooms: state.rooms,
    inputText: state.inputText,
    isInVideo: state.video.isInVideo,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    handleRoomChange: (event) => {
      dispatch(changeCurrentRoom(event.target.parentElement.id));
    },

    handleOnSend: (msg) => {
      // send it
      socket.emitMsg(msg);
      // add it (second argument is a boolean that tells it to add to current room and therefore skip searching for the room)
      dispatch(addMsg(msg, true));
      // clear Input
      dispatch(changeInputText(''));
    },

    handleTextInput: (event) => {
      dispatch(changeInputText(event.target.value));
    },

    handleVideoRequestClick: (otherId) => {

    },

    handleVideoDisconnectClick: (otherId) => {

    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);
