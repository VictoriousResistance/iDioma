import React from 'react';
import Rooms from './Rooms.jsx';
import Messages from './Messages.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';
import VideoRequestButton from './VideoRequestButton.jsx';

// current room will always be the first object in rooms (i.e. rooms[0])
const Conversations = ({ user, rooms, inputText, handleRoomChange, handleTextInput, handleOnSend, handleVideoRequestClick, handleVideoDisconnectClick, handleToggleHasError, isInVideo, isWaiting, hasError, errorMessage, invite }) => {
  const currRoom = rooms[0] || { id: 0, messages: [], users: [] };

  const msgTemplate = {
    roomId: currRoom.id,
    senderId: user.id,
    from: { firstName: user.firstName, lastName: user.lastName },
    body: '',
  };
  const waitingMessage = isWaiting ?
    <div>Waiting for response...</div>
    : null;
  const errorMessageHolder = hasError ?
    <div>
      {errorMessage}
      <button className="x" onClick={() => { handleToggleHasError(); }}>x</button>
    </div>
    : null;
  const videoRequestButton = !isInVideo ?
    <VideoRequestButton handleVideoRequestClick={handleVideoRequestClick} isWaiting={isWaiting} invite={invite} otherId={rooms[0].users[0].id + '+' + rooms[0].users[0].firstName + '+' + rooms[0].users[0].lastName} />
    : null;
    
  return (
    <div className="chatapp">
      <div>
        <Rooms rooms={rooms} currentRoom={currRoom} handleRoomChange={handleRoomChange} />
      </div>
      <div>
        <div>
          <Messages usersKey={currRoom.usersKey} messages={currRoom.messages || []} />
        </div>
        <Input msgTemplate={msgTemplate} inputText={inputText} handleOnSend={handleOnSend} handleTextInput={handleTextInput} />
        <Button msgTemplate={msgTemplate} inputText={inputText} handleOnSend={handleOnSend} />
        {videoRequestButton}
      </div>
      {waitingMessage}
      {errorMessageHolder}
    </div>
  );
};

export default Conversations;
