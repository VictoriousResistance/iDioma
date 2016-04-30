import React from 'react';
import Header from './Header.jsx';
import LeftRail from './LeftRail.jsx';

const App = () => (
  <div className="App">
    <Header />
    <LeftRail />
    <div className="Content">
      {this.props.children}
    </div>
  </div>
);

export default App;
