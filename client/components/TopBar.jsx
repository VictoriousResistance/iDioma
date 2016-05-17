import React from 'react';
import { Link } from 'react-router';

const TopBar = () => (
  <div className="topbar">
    <div className="logo">
      <a href="/home/matches">iDioma</a>
    </div>
    <ul className="main-nav">
      <li className="main-nav-item">
        <Link to="/home/matches">Browse Matches</Link>
      </li>
      <li className="main-nav-item">
        <Link to="/home/requests">Pair Requests</Link>
      </li>
      <li className="main-nav-item">
        <Link to="/home/connections">My Pairs</Link>
      </li>
      <li className="main-nav-item">
        <Link to="/home/conversations">My Conversations</Link>
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
