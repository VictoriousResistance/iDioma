import React from 'react';
var classNames = require('classnames');

const Room = ({ room, handleRoomChange, index }) => (
  <a
    href="#"
    className={classNames({
      'thread-list-item': true,
      'active': false /* change this to be responsive using current room */
    })}
    onClick={(e) => {
      handleRoomChange(e);
      e.stopPropagation();
    }}
  >
    <div id={index} className="room">
      <div className="thread-name">{room.name}</div>
    </div>
  </a>
);
/* need to update room properties above to conform to new room obj */
/* add time last updated?? */
/* display last message text? */



const Rooms = ({ rooms, handleRoomChange }) => (
  <div className="thread-section">
    <div className="thread-list">
      {rooms.map((room, i, roomsState) => (
        <Room index={i} key={room.id} room={room} handleRoomChange={handleRoomChange} />
      ))}
    </div>
  </div>
);

export default Rooms;
