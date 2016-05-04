export const unmountRequest = (id) => {
  return {
    type: 'UNMOUNT_REQUEST',
    id,
  };
};

export const removeRequest = (id) => {
  return {
    type: 'REMOVE_REQUEST',
    id,
  };
};


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

