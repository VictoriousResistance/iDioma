import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  browserHistory, Router, Route, IndexRoute,
} from 'react-router';

import chatReducer from './chat/reducers/index.js';
import socketIO from './chat/sockets.js';


// import React Components
import App from './components/App.jsx';
import ChatWindow from './chat/containers/ChatWindow.js';

const initialState = window.__INITIAL_STATE__;
const store = createStore(chatReducer, initialState);

socketIO(store);

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="chat" component={App}>
        <IndexRoute component={ChatWindow} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));