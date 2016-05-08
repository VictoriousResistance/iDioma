export const addMsg = (msg, self) => (
  {
    type: 'ADD_MESSAGE_TO_ROOM',
    msg,
    self,
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

