import React from 'react';
import { Link } from 'react-router';

const TopBar = () => (
  <ul id="top-bar">
    <li className="top-bar-item" id="logo">
      <a href="/home">iDioma</a>
    </li>
    <li className="top-bar-item">
      <Link to="/home/connections">My Connections</Link>
    </li>
    <li className="top-bar-item">
      <Link to="/home/matches">My Matches</Link>
    </li>
    <li className="top-bar-item">
      <Link to="/home/requests">Connection Requests</Link>
    </li>
    <div className="profile">
      <li className="top-bar-item">
        <Link to="/home/profile">My Profile</Link>
      </li>
      <li className="top-bar-item">
        <a href="/logout">Sign out</a>
      </li>
    </div>
  </ul>
);

export default TopBar;
