import React from 'react';
import TopBar from './TopBar.jsx';

const App = ({ children }) => (
  <div>
    <TopBar />
    <div className="content">
      {children}
    </div>
    <div id="video"></div>
    <div id="invite"></div>
  </div>
);

export default App;
