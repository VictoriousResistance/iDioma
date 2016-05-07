import React from 'react';
import { Link } from 'react-router';

const TopBar = () => (
  <div>
    <div id="logo">
      <a href="/home">iDioma</a>
    </div>
    <ul className="main-nav">
      <li className="main-nav-item">
        <Link to="/home/connections">My Connections</Link>
      </li>
      <li className="main-nav-item">
        <Link to="/home/matches">My Matches</Link>
      </li>
      <li className="main-nav-item">
        <Link to="/home/requests">Connection Requests</Link>
      </li>
      <li className="main-nav-item">
        <Link to="/home/conversations">Conversations</Link>
      </li>
    </ul>
    <ul className="right-nav">
      <li className="right-nav-item">
        <Link to="/home/profile">My Profile</Link>
      </li>
      <li className="right-nav-item">
        <a href="/logout">Sign out</a>
      </li>
    </ul>
  </div>
);

export default TopBar;
