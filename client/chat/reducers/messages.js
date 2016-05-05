const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return state.concat([action.msg]);

    default:
      return state;
  }
};

export default messages;
