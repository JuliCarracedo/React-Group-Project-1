import React from 'react';
import logo from '../Assets/logo.png';

const Header = () => (
  <div className="headerContainer">
    <div>
      <img src={logo} alt="SpaceX logo" style={{ width: '50px', height: '50px' }} className="logo" />
      <span className="headerNav"><h1>Space Travelers&apos; Hub</h1></span>
    </div>
    <div>
      <ul>
        <li>Rockets</li>
        <li>Missions</li>
        <li>My Profile</li>
      </ul>
    </div>
  </div>
);

export default Header;
