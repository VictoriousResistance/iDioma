const makeChatPage = require('./views/chat.js');

module.exports = (req, res) => {
  const initialState = {
    activeRoomMsgs: [
      {
        from: 'Mo',
        body: `Is anybody out there? OMG I LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE LOVE THIS APP`,
      },
      {
        from: 'ReiRei',
        body: 'Hello1',
      },
      {
        from: 'Mo',
        body: 'Hello2',
      },
      {
        from: 'Mo',
        body: 'Hello3',
      },
      {
        from: 'Mo',
        body: 'Hello4',
      },
      {
        from: 'Mo',
        body: 'Hello5',
      },
    ],

    conversations: [
      {
        id: 1,
        roomName: 'ReiRei',
      },
      {
        id: 2,
        roomName: 'Ashwin',
      },
      {
        id: 3,
        roomName: 'Merlin',
      },
      {
        id: 4,
        roomName: 'Morgana',
      },
    ],
  };
  res.send(makeChatPage(initialState));
};
