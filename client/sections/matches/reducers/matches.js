const matches = (state = {}, action) => {
  switch (action.type) {

    case 'UNMOUNT_MATCH':
      var newMatches = [];
      state.forEach((match) => {
        if (match.id === action.id) {
          newMatches.push(Object.assign(
            {},
            match,
            { willUnmount: true }
          ));
        } else {
          newMatches.push(match);
        }
      });
      return Object.assign({}, state, {values: newMatches});

    case 'REMOVE_MATCH':
      var newMatches = [];
      state.forEach((match) => {
        if (match.id !== action.id) {
          newMatches.push(match);
        }
      });
      return Object.assign({}, state, {values: newMatches});

    default:
      return state;
  }
};

export default matches;
