import { connect } from 'react-redux';
import Conversations from '../components/Conversations.jsx';
import {
  addMsg,
  changeInputText,
  changeCurrentRoom,
  }
  from '../actions/index.js';
import { socket } from '../sockets.js';
import request from 'then-request';
import React from 'react';
import ReactDOM from 'react-dom';
import Video from '../components/Video.jsx';

const mapStateToProps = (state) => (
  {
    user: state.profile,
    rooms: state.rooms,
    inputText: state.inputText,
    isInVideo: state.video.isInVideo,
    hasError: state.video.hasError,
    isWaiting: state.video.isWaiting,
    errorMessage: state.video.errorMessage,
    invite: state.video.invite,
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
      const invite = conversationsClient.inviteToConversation(otherId);
      dispatch(toggleIsWaiting(invite));
      invite.then(conversation => {
        dispatch(toggleIsWaiting(null));
        dispatch(toggleIsInVideo());
        ReactDOM.render(<Video conversation={conversation} handleVideoDisconnectClick={() => { ReactDOM.unmountComponentAtNode(document.getElementById('video')); }}/>, document.getElementById('video'));
        conversation.on('disconnected', () => {
          ReactDOM.unmountComponentAtNode(document.getElementById('video'));
          dispatch(toggleIsInVideo());
        });
      }, error => {
        dispatch(toggleIsWaiting(null));
        dispatch(toggleHasError(error._errorData.message));
      });
    },

    handleToggleHasError: () => {
      dispatch(toggleHasError());
    },

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);
