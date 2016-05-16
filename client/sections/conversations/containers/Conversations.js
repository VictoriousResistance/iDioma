import { connect } from 'react-redux';
import Conversations from '../components/Conversations.jsx';
import { emitMsg, addMsg, changeInputText, changeCurrentRoom, toggleVideoConnected } from '../actions/index.js';
import { socket } from '../sockets.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Video from '../components/Video.jsx';

// const conversationsClient = exportObj.conversationsClient;

// console.log('exportObj', exportObj);
// console.log('exportObj.conversationsClient', exportObj.conversationsClient);

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
      conversationsClient.inviteToConversation(otherId).then(conversation => {
        dispatch(toggleVideoConnected());
        // Draw local video, if not already previewing
        ReactDOM.render(<Video conversation={conversation} />, document.getElementById('video'));

        // When the conversation ends, stop capturing local video
        conversation.on('disconnected', () => {
          dispatch(toggleVideoConnected());
          ReactDOM.unmountComponentAtNode(document.getElementById('video'));
        });
      }, error => {
          console.error('Unable to create conversation', error);
      });
    },

    handleVideoDisconnectClick: (otherId) => {

    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);
