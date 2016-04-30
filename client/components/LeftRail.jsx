import React from 'react';
import { Link } from 'react-router';

const LeftRail = () => (
  <div>
    <Link to="/connections">My Connections</Link>
    <Link to="/requests">Connection Requests</Link>
    <Link to="/matches">Potential Connections</Link>
  </div>
);

export default LeftRail;
