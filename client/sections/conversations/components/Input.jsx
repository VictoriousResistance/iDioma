import React from 'react';

// should disable when no rooms
const Input = ({ submitMsg, videoRequestButton }) => (
  <div className="chat-message clearfix">
    <textarea
      name="message-to-send"
      id="message-to-send"
      placeholder="Type your message"
      rows="3"
      onKeyDown={(e) => (e.keyCode === 13) && submitMsg(document.getElementById('message-to-send').value)}
    ></textarea>
            
    <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
    <i className="fa fa-file-image-o"></i>
    
    <button onClick={() => submitMsg(document.getElementById('message-to-send').value)}>Send</button>
    {videoRequestButton}
  </div>
);

export default Input;
// <div className="chat-message clearfix">
//   <textarea name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3" value={inputText.value} onChange={handleTextInput}     onKeyDown={(e) => (e.keyCode === 13) && handleOnSend()}></textarea>
          
//   <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
//   <i className="fa fa-file-image-o"></i>
  
//   <button>Send</button>
//   {videoRequestButton}
// </div>