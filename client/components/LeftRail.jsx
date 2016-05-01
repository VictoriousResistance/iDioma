import React from 'react';
import { Link } from 'react-router';

const LeftRail = () => (
  <ul className="col-1-6">
    <li className="left-rail-item">
      <Link to="/home/requests">Connection Requests</Link>
    </li>
    <li className="left-rail-item">
      <Link to="/home/connections">My Connections</Link>
    </li>
    <li className="left-rail-item">
      <Link to="/home/matches">Matches</Link>
    </li>
    <li className="left-rail-item">
      <Link to="/home/profile">My Profile</Link>
    </li>

  </ul>
);

export default LeftRail;
