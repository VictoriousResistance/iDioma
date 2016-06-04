import React from 'react';
import Message from './Message.jsx';

class Messages extends React.Component {

  componentDidUpdate() {
    const objDiv = document.getElementById("messages");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    const { usersKey, messages, selfId } = this.props;
    return (
      <div className="chat-history" id="messages">
        <ul>
          {messages.map((message, i) => (
            <Message key={i} message={message} sender={usersKey[message.senderId]} self={message.senderId === selfId} />
          ))}
        </ul>
        
      </div>
    );
  }
  
}
export default Messages;

// TODO Add heading for conversation participants?