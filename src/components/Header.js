import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo.png';

const Header = () => (
  <div className="headerContainer">
    <div>
      <img src={logo} alt="SpaceX logo" style={{ width: '50px', height: '50px' }} className="logo" />
      <span className="headerNav"><h1>Space Travelers&apos; Hub</h1></span>
    </div>
    <div>
      <ul>
        <NavLink to="/">Rockets</NavLink>
        <NavLink to="/missions">Missions</NavLink>
        <NavLink to="/dragons">Dragons</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
      </ul>
    </div>
  </div>
);

export default Header;
