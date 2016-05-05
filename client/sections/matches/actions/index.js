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
