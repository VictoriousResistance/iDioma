import React from 'react';
import Header from './Header.jsx';
import LeftRail from './LeftRail.jsx';

const App = (props) => (
  <div className="grid">
    <Header />
    <LeftRail />
    <div className="col-5-6">
      {props.children}
    </div>
  </div>
);

export default App;
