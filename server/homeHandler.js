var makeHomePage = require('./views/home.js');

module.exports = function(req, res) {
  var initialState = {
    profile: {
      id: 1,
      firstName: 'Lach',
      lastName: 'Zester',
      canTeach: [
        ['French', 'fluent'],
        ['English', 'native'],
      ],
      willLearn: [
        ['German', 'basic'],
      ],
      description: 'i wanna learn',
    },
    connections: [
      {
        id: 2,
        firstName: 'Connection',
        lastName: 'Established',
        canTeach: [
          ['German', 'fluent'],
        ],
        willLearn: [
          ['French', 'basic'],
        ],
        description: 'hello, is there anybody in there? just nod if you can hear me. is there anyone home?',
        willUnmount: false,
      },
      {
        id: 3,
        firstName: 'Connection',
        lastName: 'Established',
        canTeach: [
          ['German', 'fluent'],
        ],
        willLearn: [
          ['French', 'basic'],
        ],
        description: 'musical genius',
        willUnmount: false,
      },
      {
        id: 4,
        firstName: 'Connection',
        lastName: 'Established',
        canTeach: [
          ['German', 'fluent'],
        ],
        willLearn: [
          ['French', 'basic'],
        ],
        description: 'hello, is there anybody in there? just nod if you can hear me. is there anyone home?',
        willUnmount: false,
      },
    ],
    matches: [
      {
        id: 5,
        firstName: 'Match',
        lastName: 'Potential',
        canTeach: [
          ['German', 'fluent'],
        ],
        willLearn: [
          ['French', 'basic'],
        ],
        description: 'hello, is there anybody in there? just nod if you can hear me. is there anyone home?',
        willUnmount: false,
      },
      {
        id: 6,
        firstName: 'Match',
        lastName: 'Potential',
        canTeach: [
          ['German', 'fluent'],
        ],
        willLearn: [
          ['French', 'basic'],
        ],
        description: 'hello, is there anybody in there? just nod if you can hear me. is there anyone home?',
        willUnmount: false,
      },
      {
        id: 7,
        firstName: 'Match',
        lastName: 'Potential',
        canTeach: [
          ['German', 'fluent'],
        ],
        willLearn: [
          ['French', 'basic'],
        ],
        description: 'hello, is there anybody in there? just nod if you can hear me. is there anyone home?',
        willUnmount: false,
      },
    ],
    connectionRequests: [
      {
        id: 8,
        firstName: 'Add',
        lastName: 'Me',
        canTeach: [
          ['German', 'fluent'],
        ],
        willLearn: [
          ['French', 'basic'],
        ],
        description: 'hello, is there anybody in there? just nod if you can hear me. is there anyone home?',
        willUnmount: false,
      },
      {
        id: 9,
        firstName: 'Add',
        lastName: 'Me',
        canTeach: [
          ['German', 'fluent'],
        ],
        willLearn: [
          ['French', 'basic'],
        ],
        description: 'hello, is there anybody in there? just nod if you can hear me. is there anyone home?',
        willUnmount: false,
      },
      {
        id: 10,
        firstName: 'Add',
        lastName: 'Me',
        canTeach: [
          ['German', 'fluent'],
        ],
        willLearn: [
          ['French', 'basic'],
        ],
        description: 'hello, is there anybody in there? just nod if you can hear me. is there anyone home?',
        willUnmount: false,
      },
    ],
  };
  res.send(makeHomePage(initialState));
};