import React from 'react';
import Header from './Header.jsx';
import LeftRail from './LeftRail.jsx';

const App = ({ children }) => (
  <div className="grid">
    <Header />
    <LeftRail />
    <div className="col-5-6">
      {children}
    </div>
  </div>
);

export default App;
