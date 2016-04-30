import React from 'react';
import Header from './Header.jsx';
import LeftRail from './LeftRail.jsx';

const App = (props) => (
  <div className="App">
    <Header />
    <LeftRail />
    <div className="Content">
      {props.children}
    </div>
  </div>
);

export default App;
