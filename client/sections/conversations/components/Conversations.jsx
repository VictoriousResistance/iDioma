import React from 'react';
import Rooms from './Rooms.jsx';
import Messages from './Messages.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';

//FIXME add handleOnVideo
const Conversations = ({ user, rooms, messages, inputText, handleTextInput, handleOnSend }) => (
  <div>
    <div className="col-1-3" >
      <Rooms rooms={rooms} />
    </div>
    <div className="col-2-3" >
      <div>
        <Messages messages={messages} />
      </div>
      <Input inputText={inputText} handleTextInput={handleTextInput} />
      <Button user={user} inputText={inputText} handleOnSend={handleOnSend} />
    </div>
  </div>
);

export default Conversations;
