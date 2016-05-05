import React from 'react';
import { Link } from 'react-router';

const TopBar = () => (
  <div className="top-bar-container">
    <ul className="top-bar">
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
      <div className="profile-link">
        <li className="top-bar-item">
          <Link to="/home/profile">My Profile</Link>
        </li>
        <li className="top-bar-item">
          <a href="/logout">Sign out</a>
        </li>
      </div>
    </ul>
  </div>
);

export default TopBar;
