import React from 'react';
import Rooms from './Rooms.jsx';
import Messages from './Messages.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';
import VideoRequestButton from './VideoRequestButton.jsx';

// current room will always be the first object in rooms (i.e. rooms[0])
const Conversations = ({ self, rooms, inputText, handleRoomChange, roomDeleter, handleTextInput, handleOnSend, handleVideoRequestClick, handleVideoDisconnectClick, handleToggleHasError, isInVideo, isWaiting, hasError, errorMessage, invite }) => {
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

  const currRoom = rooms[0] || { id: 0, messages: [], users: [] };

  const msgTemplate = {
    roomId: currRoom.id,
    senderId: self.id,
    from: { firstName: self.firstName, lastName: self.lastName },
    body: '',
  };

  const submitMsg = () =>
    handleOnSend(Object.assign({}, msgTemplate, { body: inputText.value }));

  const waitingMessage = isWaiting ?
    <div>Waiting for response...</div>
    : null;
  const errorMessageHolder = hasError ?
    <div>
      <div className="language">
        {errorMessage}
      </div>
      <button className="x" onClick={() => { handleToggleHasError(); }}>x</button>
    </div>
    : null;
  const videoRequestButton = !isInVideo ?
    <VideoRequestButton handleVideoRequestClick={handleVideoRequestClick} isWaiting={isWaiting} invite={invite} otherId={rooms[0].users[0].id + '+' + rooms[0].users[0].firstName + '+' + rooms[0].users[0].lastName} />
    : null;
    
  return (
    <div className="chatapp">
      <div>
        <Rooms rooms={rooms} currentRoom={currRoom} handleRoomChange={handleRoomChange} roomDeleter={roomDeleter} selfId={self.id} />
      </div>
      <div>
        <div>
          <Messages usersKey={currRoom.usersKey} messages={currRoom.messages || []} />
        </div>
        <Input inputText={inputText} clickHandler={submitMsg} handleTextInput={handleTextInput} />
        <Button clickHandler={submitMsg} label='Send' type='action' />
        {videoRequestButton}
      </div>
      {waitingMessage}
      {errorMessageHolder}
    </div>
  );
};

export default Conversations;
