import React from 'react';
import TopBar from './TopBar.jsx';

const App = ({ children }) => (
  <div className="grid">
    <TopBar />
    <div className="content">
      {children}
    </div>
  </div>
);

export default App;
