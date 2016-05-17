import React from 'react';
import TopBar from './TopBar.jsx';

const App = ({ children }) => (
  <div>
    <TopBar />
    <div className="content">
      {children}
    </div>
    <div id="video">
      placeholder for video component. id is "video"
    </div>
    <div id="invite">
      placeholder for incoming invites
    </div>
  </div>
);

export default App;
