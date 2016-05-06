export const addMsg = (msg) => (
  {
    type: 'ADD_MESSAGE',
    msg,
  }
);

export const changeInputText = (value) => (
  {
    type: 'CHANGE_TEXT_INPUT',
    value,
  }
);
