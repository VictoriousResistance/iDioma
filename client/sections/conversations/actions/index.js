export const addMsg = (msg, activeRoom) => (
  {
    type: 'ADD_MESSAGE_TO_ROOM',
    msg,
    activeRoom,
  }
);

export const changeInputText = (value) => (
  {
    type: 'CHANGE_TEXT_INPUT',
    value,
  }
);

export const changeCurrentRoom = (index) => (
  {
    type: 'PUSH_ROOM_TO_TOP',
    index,
  }
);

<<<<<<< 4a81601e24f49796e85a89c92b3ef061ccfb270e
export const toggleIsInVideo = () => (
  {
    type: 'TOGGLE_IS_IN_VIDEO',
  }
);


export const toggleHasError = (errorMessage = '') => (
  {
    type: 'TOGGLE_HAS_ERROR',
    errorMessage,
  }
);

export const toggleIsWaiting = (invite) => (
  {
    type: 'TOGGLE_IS_WAITING',
    invite,
  }
);
=======
export const addRoom = (room, connection) => (
  {
    type: 'ADD_NEW_ROOM',
    room,
    connection,
  }
);

>>>>>>> Working rooms from connections tab
