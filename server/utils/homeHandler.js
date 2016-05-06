var makeHomePage = require('../views/home.js');

module.exports = function(req, res) {
  var initialState = {
    inputText: { value: '' },
    messages: [
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
    rooms: [
      {
        id: 1,
        name: 'ReiRei',
      },
      {
        id: 2,
        name: 'Ashwin',
      },
      {
        id: 3,
        name: 'Merlin',
      },
      {
        id: 4,
        name: 'Morgana',
      },
    ],
    profile: {
      id: '1122067557855362',
      firstName: 'Lach',
      lastName: 'Zester',
      canTeach: [
        ['French', 'fluent'],
        ['English', 'native'],
      ],
      willLearn: [
        ['German', 'basic'],
      ],
      description: 'Javascript is a language too.',
      photoUrl: 'http://www.amzocorp.com/AAWEBIMAGES/home.puppy.jpg',
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
        description: 'hello, is there anybody in there? just nod if you can hear me. is there anyone home? if i make this longer, will it still work?',
        photoUrl: 'https://e4292304444963bb9b1c-26c9e18a7a93639122506172dc90d702.ssl.cf2.rackcdn.com/gallery/img/t/golden-retriever-239058.jpg',
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
        photoUrl: 'https://e4292304444963bb9b1c-26c9e18a7a93639122506172dc90d702.ssl.cf2.rackcdn.com/gallery/img/t/golden-retriever-239058.jpg',
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
        photoUrl: 'https://e4292304444963bb9b1c-26c9e18a7a93639122506172dc90d702.ssl.cf2.rackcdn.com/gallery/img/t/golden-retriever-239058.jpg',
      },
    ],
    matches: [
      {
        id: '123456',
        firstName: 'Match',
        lastName: 'Potential',
        canTeach: [
          ['German', 'fluent'],
        ],
        willLearn: [
          ['French', 'basic'],
        ],
        description: 'hello, is there anybody in there? just nod if you can hear me. is there anyone home?',
        photoUrl: 'http://www.amzocorp.com/AAWEBIMAGES/home.puppy.jpg',
      },
      {
        id: '78910',
        firstName: 'Match',
        lastName: 'Potential',
        canTeach: [
          ['German', 'fluent'],
        ],
        willLearn: [
          ['French', 'basic'],
        ],
        description: 'hello, is there anybody in there? just nod if you can hear me. is there anyone home?',
        photoUrl: 'http://www.amzocorp.com/AAWEBIMAGES/home.puppy.jpg',
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
        photoUrl: 'http://www.amzocorp.com/AAWEBIMAGES/home.puppy.jpg',
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
        photoUrl: 'http://www.pvvcvets.com/_images//kitten.jpg',
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
        photoUrl: 'http://www.pvvcvets.com/_images//kitten.jpg',
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
        photoUrl: 'http://www.pvvcvets.com/_images//kitten.jpg',
      },
    ],
  };
  res.send(makeHomePage(initialState));
};