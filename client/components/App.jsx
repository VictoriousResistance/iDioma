import React from 'react';
import TopBar from './TopBar.jsx';

const App = ({ children }) => (
  <div className="grid">
    <TopBar />
    <div className="col-1-1">
      {children}
    </div>
  </div>
);

export default App;
