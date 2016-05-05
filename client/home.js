import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  browserHistory, Router, Route, IndexRoute,
} from 'react-router';

import rootReducer from './rootReducer.js';
import socketIO from './sections/conversations/sockets.js';

import App from './components/App.jsx';
import Connections from './sections/connections/containers/Connections.js';
import ConnectionRequests from './sections/connectionRequests/containers/ConnectionRequests.js';
import Matches from './sections/matches/containers/Matches.js';
import Profile from './sections/profile/containers/Profile.js';
import Conversations from './sections/conversations/containers/Conversations.js';

const initialState = window.__INITIAL_STATE__;

const store = createStore(rootReducer, initialState);

socketIO(store);

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="home" component={App}>
        <IndexRoute component={Profile} />
        <Route path="requests" component={ConnectionRequests} />
        <Route path="connections" component={Connections} />
        <Route path="matches" component={Matches} />
        <Route path="profile" component={Profile} />
        <Route path="conversations" component={Conversations} />
        <Route path="*" component={Matches} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
