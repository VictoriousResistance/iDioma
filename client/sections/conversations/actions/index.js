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

export const toggleIsInVideo = () => (
  {
    type: 'TOGGLE_IS_IN_VIDEO',
  }
);
