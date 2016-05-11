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

    case 'INCREMENT_OFFSET':
      return Object.assign({}, state, {offset: state.offset + action.increment});

    default:
      return state;
  }
};

export default matches;
