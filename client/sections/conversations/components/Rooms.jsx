import React from 'react';
import classNames from 'classnames';

const nameMaker = (users) =>
  (users.length === 0) ? 'Empty' :
    users.map((user, i, arr) => {
      const last = arr.length - 1;
      let join = (i === 0) ? '' : ((i === last) ? ' & ' : ', ');
      return `${join}${user.firstName} ${user.lastName}`;
    });

const Room = ({ room, handleRoomChange, index }) => (
  <a
    href="#"
    className={classNames({
      'thread-list-item': true,
      'active': false /* change this to be responsive using current room */
    })}
    onClick={(e) => {
      handleRoomChange(e);
    }}
  >
    <div id={index} className="room">
      <div className="thread-name">{nameMaker(room.users)}</div>
    </div>
  </a>
);
//TODO
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
