import React from 'react';
import Button from './Button.jsx';
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
  <a href="#" onClick={() => handleRoomChange(index)}>
    <div className="room">
      <div className="thread-name">{nameMaker(room.users)}</div>
      <Button label='Delete' type='action' clickHandler={() => console.log(room.id)} />
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
        <Room index={i} room={room} handleRoomChange={handleRoomChange} />
      ))}
    </div>
  </div>
);

export default Rooms;
