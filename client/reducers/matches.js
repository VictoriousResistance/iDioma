const matches = (state = [], action) => {
  switch (action.type) {

    case 'UNMOUNT_MATCH':
      var newState = [];
      state.forEach((match) => {
        if (match.id === action.id) {
          newState.push(Object.assign(
            {},
            match,
            {willUnmount: true}
          ));
        } else {
          newState.push(match);
        }
      });
      return newState;

    case 'CONNECT_MATCH':
      var newState = [];
      state.forEach((match) => {
        if (match.id !== action.id) {
          newState.push(match);
        }
      });
      return newState;
      
    default:
      return state;
  }
};

export default matches;
