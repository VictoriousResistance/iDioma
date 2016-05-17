import React from 'react';
import classNames from 'classnames';

const nameMaker = (users) => {
  const last = users.length - 1;
  return users
  .map(user => `${user.firstName} ${user.lastName}`)
  .reduce((names, currName, i) =>
    names + (i === last ? ' & ' : ', ') + currName
  );
};

const Room = ({ room, handleRoomChange, index }) => (
  <a
    href="#"
    className={classNames({
      'thread-list-item': true,
      active: false, /* change this to be responsive using current room */
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

// TODO
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
