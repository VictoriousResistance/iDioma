import React from 'react';
import Rooms from './Rooms.jsx';
import Messages from './Messages.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';
import VideoRequestButton from './VideoRequestButton.jsx';

// current room will always be the first object in rooms (i.e. rooms[0])
const Conversations = ({ self, rooms, handleRoomChange, roomDeleter, handleOnSend, handleVideoRequestClick, handleVideoDisconnectClick, handleToggleHasError, isInVideo, isWaiting, hasError, errorMessage, invite }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-tab-message">
        <p>You haven't had a conversation with a pair yet. Break the ice?</p>
        <p>Potential conversation starters:</p>
        <p>1) Exchange a simple greeting in a language you and your pair both know.</p>
        <p>2) Share an interesting cultural anecdote.</p>
        <p>3) Introduce a song you like.</p>
        <p>4) Introduce a movie you recently watched.</p>
        <p>Be open and creative!</p>
      </div>
    );
  }

  const currRoom = rooms[0] || { id: 0, messages: [], users: [], usersKey: {} };

  const msgTemplate = {
    roomId: currRoom.id,
    senderId: self.id,
    from: { firstName: self.firstName, lastName: self.lastName },
    body: '',
  };

  const submitMsg = (inputText) => {
    handleOnSend(Object.assign({}, msgTemplate, { body: inputText }));
    document.getElementById('message-to-send').value = '';
  };

  const waitingMessage = isWaiting ?
    <div>Waiting for response...</div>
    : null;

  const errorMessageHolder = hasError ?
    <div className="is-waiting-container">
      <div className="language is-waiting-container">
        {errorMessage}
      </div>
      <button className="x" onClick={() => { handleToggleHasError(); }}>x</button>
    </div>
    : null;

  const videoRequestButton = !isInVideo ?
    <VideoRequestButton handleVideoRequestClick={handleVideoRequestClick} isWaiting={isWaiting} invite={invite} otherId={rooms[0].users[0].id + '+' + rooms[0].users[0].firstName + '+' + rooms[0].users[0].lastName} />
    : null;
    
  return (
    <div>

      <div className="container clearfix">
        <Rooms selfId={self.id} rooms={rooms} handleRoomChange={handleRoomChange} roomDeleter={roomDeleter} />
        <div className="chat">
          <div className="chat-header clearfix">
            <img className="profilePic" src={currRoom.users[0].photoUrl} alt="avatar" />
            
            <div className="chat-about">
              <div className="chat-with">{currRoom.users[0].firstName + ' ' + currRoom.users[0].lastName}</div>
              <div className="chat-num-messages">{currRoom.messages.length} messages</div>
            </div>
            <i className="fa fa-star"></i>
          </div>
          <Messages usersKey={currRoom.usersKey} messages={currRoom.messages} selfId={self.id} />
          <Input submitMsg={submitMsg} videoRequestButton={videoRequestButton} waitingMessage={waitingMessage} errorMessageHolder={errorMessageHolder} />
        </div>
      </div>
    </div>
  );
};

export default Conversations;
