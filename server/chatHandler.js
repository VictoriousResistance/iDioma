const makeChatPage = require('./views/chat.js');

module.exports = (req, res) => {
  const initialState = {
    conversations: [
      {
        id: 8,
        roomName: 'ReiRei',
      },
      {
        id: 9,
        roomName: 'Ashwin',
      },
      {
        id: 8,
        roomName: 'Merlin',
      },
      {
        id: 8,
        roomName: 'Morgana',
      },
    ],
  };
  res.send(makeChatPage(initialState));
};
