import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  browserHistory, Router, Route, IndexRoute,
} from 'react-router';

import rootReducer from './reducers/index.js';
import socketIO from './conversations/sockets.js';

import App from './components/App.jsx';
import Connections from './connections/containers/Connections.js';
import ConnectionRequests from './connectionRequests/containers/ConnectionRequests.js';
import Matches from './matches/containers/Matches.js';
import Profile from './profile/containers/Profile.js';
import Conversations from './conversations/containers/Conversations.js';

const initialState = window.__INITIAL_STATE__;

const store = createStore(rootReducer, initialState);

socketIO(store);

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="home" component={App}>
        <IndexRoute component={Connections} />
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
