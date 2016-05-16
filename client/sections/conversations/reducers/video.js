const video = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_IS_IN_VIDEO': {
      return Object.assign({}, state, { isInVideo: !state.isInVideo });
    }
    case 'TOGGLE_HAS_ERROR': {
      return Object.assign({}, state, { hasError: !state.hasError });
    }
    case 'TOGGLE_IS_WAITING': {
      return Object.assign({}, state, { isWaiting: !state.isWaiting });
    }
    default:
      return state;
  }
};
export default video;
