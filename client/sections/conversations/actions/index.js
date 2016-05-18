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

export const changeCurrentRoom = (roomIndex) => (
  {
    type: 'PUSH_ROOM_TO_TOP',
    roomIndex,
  }
);

export const deleteRoom = (roomIndex) => (
  {
    type: 'DELETE_ROOM',
    roomIndex,
  }
);

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

export const addNewRoom = (room, self, connections) => (
  {
    type: 'ADD_NEW_ROOM',
    room,
    self,
    connections,
  }
);

export const incrementOnlineNow = (roomId) => (
    {
      type: 'INCREMENT_ROOM_ONLINE_NOW',
      roomId,
    }
);
