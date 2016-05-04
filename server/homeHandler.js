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
        id: '1556463314683658',
        firstName: 'Reina',
        lastName: 'IsNotHere',
        canTeach: [
          ['German', 'fluent'],
        ],
        willLearn: [
          ['French', 'basic'],
        ],
        description: 'hello, is there anybody in there? just nod if you can hear me. is there anyone home?',
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
      },
    ],
  };
  res.send(makeHomePage(initialState));
};