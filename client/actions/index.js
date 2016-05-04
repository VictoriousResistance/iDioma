export const acceptRequest = (id) => {
  return {
    type: 'ACCEPT_REQUEST',
    id,
  };
};

export const declineRequest = (id) => {
  return {
    type: 'DECLINE_REQUEST',
    id,
  };
};
