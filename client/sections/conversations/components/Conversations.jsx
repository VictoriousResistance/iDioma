import React from 'react';
import Rooms from './Rooms.jsx';
import Messages from './Messages.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';
import VideoRequestOrDisconnectButton from './VideoRequestOrDisconnectButton.jsx';

// FIXME add handleOnVideo
// current room will always be the first object in rooms (i.e. rooms[0])
const Conversations = ({ user, rooms, inputText, handleRoomChange, handleTextInput, handleOnSend, handleVideoRequestClick, handleVideoDisconnectClick }) => {
  const currRoom = rooms[0] || { id: 0, messages: [], users: [] };
  const msgTemplate = {
    roomId: currRoom.id,
    from: { firstName: user.firstName, lastName: user.lastName },
    body: '',
  };

  return (
    <div className="chatapp">
      <div>
        <Rooms rooms={rooms} currentRoom={currRoom} handleRoomChange={handleRoomChange} />
      </div>
      <div>
        <div>
          <Messages messages={currRoom.messages} />
        </div>
        <Input msgTemplate={msgTemplate} inputText={inputText} handleOnSend={handleOnSend} handleTextInput={handleTextInput} />
        <Button msgTemplate={msgTemplate} inputText={inputText} handleOnSend={handleOnSend} />
        <VideoRequestOrDisconnectButton handleVideoRequestClick={handleVideoRequestClick} handleVideoDisconnectClick={handleVideoDisconnectClick} otherId={rooms[0].users[0].id} />
      </div>
      <div id="video">
        placeholder for video component. id is "video"
      </div>
    </div>
  );
};

export default Conversations;
