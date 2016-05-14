var makeHomePage = require('../views/home.js');

module.exports = function(req, res) {
  console.log(req);
  var initialState = {
    inputText: { value: '' },
    rooms: [
      {
        id: '15564633314683658',
        name: 'ReiRei', /* users: [{id: '123', firstName: 'ReiRei', lastName: 'ReiRei'}] */
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
      },
      {
        id: '31556463314683658',
        name: 'Ashwin',
        messages: [],
      },
      {
        id: '15356463314683658',
        name: 'Merlin',
        messages: [],
      },
      {
        id: '15564633146836583',
        name: 'Morgana',
        messages: [],
      },
    ],
    profile: {
      id: '111213',
      firstName: 'Lach',
      lastName: 'Zester',
      languages: {
        canTeach: [
          ['English', 'native'],
        ],
        willLearn: [
          ['French', 'basic'],
        ],
      },
      description: 'Javascript is a language too.',
      photoUrl: 'http://www.amzocorp.com/AAWEBIMAGES/home.puppy.jpg',
    },
    connections: [
      {
        id: '1556463314683658',
        firstName: 'Reina',
        lastName: 'IsNotHere',
        languages: {
          canTeach: [
            ['German', 'fluent'],
          ],
          willLearn: [
            ['French', 'basic'],
          ],
        },
        description: 'hello, is there anybody in there? just nod if you can hear me. is there anyone home? if i make this longer, will it still work? imma make this really long and see what it looks like on the page and if the buttons still look good',
        photoUrl: 'https://e4292304444963bb9b1c-26c9e18a7a93639122506172dc90d702.ssl.cf2.rackcdn.com/gallery/img/t/golden-retriever-239058.jpg',
      },
      {
        id: 3,
        firstName: 'Isabelle',
        lastName: 'T',
        languages: {
          canTeach: [
            ['French', 'fluent'],
          ],
          willLearn: [
            ['Ruby', 'basic'],
          ],
        },
        description: 'there was a house in new orleans, they called the rising sun...',
        photoUrl: 'https://e4292304444963bb9b1c-26c9e18a7a93639122506172dc90d702.ssl.cf2.rackcdn.com/gallery/img/t/golden-retriever-239058.jpg',
      },
      {
        id: 4,
        firstName: 'Audrey',
        lastName: 'L',
        languages: {
          canTeach: [
            ['Python', 'native'],
          ],
          willLearn: [
            ['French', 'basic'],
          ],
        },
        description: 'making buttons is really fun. making buttons you can click on is super fun!',
        photoUrl: 'https://e4292304444963bb9b1c-26c9e18a7a93639122506172dc90d702.ssl.cf2.rackcdn.com/gallery/img/t/golden-retriever-239058.jpg',
      },
    ],
    matches: {
      offset: 20,
      values: [
        {
          id: '123456',
          firstName: 'Maroon',
          lastName: '5',
          languages: {
            canTeach: [
              ['German', 'fluent'],
            ],
            willLearn: [
              ['French', 'basic'],
            ],
          },
          description: 'i was so high i didnt recognize the fire burning in her eyes. this love is taking a toll on me. she said goodbye, too many times before.',
          photoUrl: 'http://www.amzocorp.com/AAWEBIMAGES/home.puppy.jpg',
        },
        {
          id: '78910',
          firstName: 'Anna',
          lastName: 'Frozen',
          languages: {
            canTeach: [
              ['Polish', 'fluent'],
            ],
            willLearn: [
              ['English', 'basic'],
            ],
          },
          description: 'do you wanna build a snowman, come on lets go and play',
          photoUrl: 'http://www.amzocorp.com/AAWEBIMAGES/home.puppy.jpg',
        },
        {
          id: 7,
          firstName: 'Slim',
          lastName: 'Shady',
          languages: {
            canTeach: [
              ['English', 'fluent'],
            ],
            willLearn: [
              ['French', 'basic'],
            ],
          },
          description: 'im beginning to feel like a rap god',
          photoUrl: 'http://www.amzocorp.com/AAWEBIMAGES/home.puppy.jpg',
        },
      ],
    },
    connectionRequests: [
      {
        id: 8,
        firstName: 'Adele',
        lastName: 'Adkins',
        languages: {
          canTeach: [
            ['German', 'fluent'],
          ],
          willLearn: [
            ['French', 'basic'],
          ],
        },
        description: 'theres a fire burning in my heart. we couldve had it all. rolling in the deep. you had my heart inside of your hand...',
        photoUrl: 'http://www.pvvcvets.com/_images//kitten.jpg',
      },
      {
        id: 9,
        firstName: 'Britney',
        lastName: 'S',
        languages: {
          canTeach: [
            ['German', 'fluent'],
          ],
          willLearn: [
            ['French', 'basic'],
          ],
        },
        description: 'oops i did it again',
        photoUrl: 'http://www.pvvcvets.com/_images//kitten.jpg',
      },
      {
        id: 10,
        firstName: 'Genevieve',
        lastName: 'Morgana',
        languages: {
          canTeach: [
            ['German', 'fluent'],
          ],
          willLearn: [
            ['French', 'basic'],
          ],
        },
        description: 'everyone put your hand out and close your eyes. your thumbs should be tucked. not down, tucked.',
        photoUrl: 'http://www.pvvcvets.com/_images//kitten.jpg',
      },
    ],
  };
  res.send(makeHomePage(initialState));
};