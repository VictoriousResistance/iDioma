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
  incomingConnectionRequests: [
    {
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



