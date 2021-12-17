import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo.png';

const Header = () => {
  const [activeLink, setActiveLink] = useState('/');
  return (
    <div className="headerContainer">
      <div>
        <img
          src={logo}
          alt="SpaceX logo"
          style={{ width: '50px', height: '50px' }}
          className="logo"
        />
        <span className="headerNav">
          <h1>Space Travelers&apos; Hub</h1>
        </span>
      </div>
      <div>
        <ul className="nav__links">
          <NavLink
            to="/"
            onClick={() => setActiveLink('/')}
            style={{ textDecoration: activeLink === '/' ? 'underline' : '' }}
          >
            Rockets
          </NavLink>
          <NavLink
            to="/missions"
            onClick={() => setActiveLink('mission')}
            style={{
              textDecoration: activeLink === 'mission' ? 'underline' : '',
            }}
          >
            Missions
          </NavLink>
          <NavLink
            to="/dragons"
            onClick={() => setActiveLink('dragons')}
            style={{
              textDecoration: activeLink === 'dragons' ? 'underline' : '',
            }}
          >
            Dragons
          </NavLink>
          <NavLink
            to="/profile"
            onClick={() => setActiveLink('profile')}
            style={{
              textDecoration: activeLink === 'profile' ? 'underline' : '',
            }}
          >
            My Profile
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
