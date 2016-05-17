const video = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_IS_IN_VIDEO': {
      return Object.assign({}, state, { isInVideo: !state.isInVideo });
    }
    case 'TOGGLE_HAS_ERROR': {
      return Object.assign({}, state, { hasError: !state.hasError, errorMessage: action.errorMessage });
    }
    case 'TOGGLE_IS_WAITING': {
      return Object.assign({}, state, { isWaiting: !state.isWaiting }, { invite: action.invite });
    }
    default:
      return state;
  }
};
export default video;
