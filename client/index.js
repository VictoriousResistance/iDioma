import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  browserHistory, Router, Route, IndexRoute,
} from 'react-router';

import rootReducer from './reducers/index.js';

import App from './components/App.jsx';
import Connections from './containers/Connections.js';
import ConnectionRequests from './containers/ConnectionRequests.js';
import Matches from './containers/Matches.js';
import Profile from './containers/Profile.js';

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
      description: 'sup',
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
      description: 'sup',
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
      description: 'sup',
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
      description: 'sup',
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
      description: 'sup',
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
      description: 'sup',
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
      description: 'sup',
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
      description: 'sup',
    },
  ],
};

const initialState = __INITIAL_STATE__;

const store = createStore(rootReducer, initialState);
render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="home" component={App}>
        <IndexRoute component={Connections} />
        <Route path="requests" component={ConnectionRequests} />
        <Route path="connections" component={Connections} />
        <Route path="matches" component={Matches} />
        <Route path="profile" component={Profile} />
        <Route path="*" component={Matches} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));



