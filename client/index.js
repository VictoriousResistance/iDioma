import React from 'react';
import { render } from 'react-dom';
import {
  browserHistory, Router, Route, IndexRoute,
} from 'react-router';

import App from './components/App.jsx';
import Connections from './containers/Connections.jsx';
import ConnectionRequests from './containers/ConnectionRequests.jsx';
import Matches from './containers/Matches.jsx';

window.__INITIAL_STATE__ = {
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
    interests: [
      'computer science', 'house music',
    ],
  },
  connections: [
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      interests: [
        'music',
      ],
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
      interests: [
        'music',
      ],
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
      interests: [
        'music',
      ],
    },
  ],
};

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Matches} />
      <Route path="requests" component={ConnectionRequests} />
      <Route path="connections" component={Connections} />
      <Route path="matches" component={Matches} />
      <Route path="*" component={Matches} />
    </Route>
  </Router>
), document.getElementById('app'));



