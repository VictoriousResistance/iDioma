import React from 'react';
import Rooms from './Rooms.jsx';
import Messages from './Messages.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';

// FIXME add handleOnVideo
// current room will always be the first object in rooms (i.e. rooms[0])
const Conversations = ({ user, rooms, inputText, handleRoomChange, handleTextInput, handleOnSend }) => {
  const currRoom = rooms[0];
  const msgTemplate = {
    roomId: currRoom.id,
    from: user.id,
    body: '',
  };

  return (
    <div>
      <div className="col-1-3" >
        <Rooms rooms={rooms} currentRoom={currRoom} handleRoomChange={handleRoomChange} />
      </div>
      <div className="col-2-3" >
        <div>
          <Messages messages={currRoom.messages} />
        </div>
        <Input msgTemplate={msgTemplate} inputText={inputText} handleOnSend={handleOnSend} handleTextInput={handleTextInput} />
        <Button msgTemplate={msgTemplate} inputText={inputText} handleOnSend={handleOnSend} />
      </div>
    </div>
  );
};

export default Conversations;
