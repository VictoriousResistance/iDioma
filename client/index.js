import React from 'react';
import { render } from 'react-dom';

window.__INITIAL_STATE__ = {
  user: {
    firstName: 'Lach',
    lastName: 'Zester',
    canTeach: [
      ['French', 'fluent'],
      ['English', 'native'],
    ],
    willLearn: [
      ['German', 'basic'],
    ],
    interests: [
      'computer science', 'house music',
    ],
  },
  connections: [
    {
      firstName: 'Mo',
      lastName: 'Naqvi',
      canTeach: [
        ['German', 'fluent'],
      ],
      willLearn: [
        ['French', 'basic'],
      ],
      interests: [
        'music',
      ],
    },
    {
      firstName: 'Mo',
      lastName: 'Naqvi',
      canTeach: [
        ['German', 'fluent'],
      ],
      willLearn: [
        ['French', 'basic'],
      ],
      interests: [
        'music',
      ],
    },
    {
      firstName: 'Mo',
      lastName: 'Naqvi',
      canTeach: [
        ['German', 'fluent'],
      ],
      willLearn: [
        ['French', 'basic'],
      ],
      interests: [
        'music',
      ],
    },
  ],
  matches: [
    {
      firstName: 'Mo',
      lastName: 'Naqvi',
      canTeach: [
        ['German', 'fluent'],
      ],
      willLearn: [
        ['French', 'basic'],
      ],
      interests: [
        'music',
      ],
    },
    {
      firstName: 'Mo',
      lastName: 'Naqvi',
      canTeach: [
        ['German', 'fluent'],
      ],
      willLearn: [
        ['French', 'basic'],
      ],
      interests: [
        'music',
      ],
    },
    {
      firstName: 'Mo',
      lastName: 'Naqvi',
      canTeach: [
        ['German', 'fluent'],
      ],
      willLearn: [
        ['French', 'basic'],
      ],
      interests: [
        'music',
      ],
    },
  ],
};

render((<div>Hi</div>), document.getElementById('app'));