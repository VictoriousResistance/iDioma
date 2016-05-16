import { connect } from 'react-redux';
import Conversations from '../components/Conversations.jsx';
import { emitMsg, addMsg, changeInputText, changeCurrentRoom, toggleIsInVideo } from '../actions/index.js';
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
    hasError: state.video.hasError,
    isWaiting: state.video.isWaiting,
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
      ReactDOM.render(<div>Waiting for response...</div>, document.getElementById('waiting'));
      conversationsClient.inviteToConversation(otherId).then(conversation => {
        ReactDOM.unmountComponentAtNode(document.getElementById('waiting'));
        
        dispatch(toggleIsInVideo());
        ReactDOM.render(<Video conversation={conversation} />, document.getElementById('video'));
        conversation.on('disconnected', () => {
          ReactDOM.unmountComponentAtNode(document.getElementById('video'));
          dispatch(toggleIsInVideo());
  
        });
      }, error => {
          ReactDOM.unmountComponentAtNode(document.getElementById('waiting'));
          ReactDOM.render(<div> {error._errorData.message} </div>, document.getElementById('errorMessage'));
          console.error('Unable to create conversation', error);
      });
    },

    handleVideoDisconnectClick: () => {
      ReactDOM.unmountComponentAtNode(document.getElementById('video'));
    },

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);
