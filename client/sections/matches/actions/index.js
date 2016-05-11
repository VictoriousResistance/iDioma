export const unmountMatch = (id) => {
  return {
    type: 'UNMOUNT_MATCH',
    id,
  };
};

export const removeMatch = (id) => {
  return {
    type: 'REMOVE_MATCH',
    id,
  };
};

export const incrementOffset = (increment) => {
  return {
    type: 'INCREMENT_OFFSET',
    increment,
  };
};

export const addMatches = (matches) => {
  return {
    type: 'ADD_MATCHES',
    matches,
  };
};
