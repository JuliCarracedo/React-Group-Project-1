import React from 'react';
import logo from '../Assets/logo.png';

const Header = () => {
    // const links = [
    // {
    //     id: 1,
    //     path: '/',
    //     text: 'Rockets',
    //   },
    //   {
    //     id: 2,
    //     path: '/missions',
    //     text: 'Mission'
    //   },
    //   {
    //     id: 3,
    //     path: '/profile',
    //     text: 'My profile'
    //   },
    // ];

return (
    <div className='headerContainer'>
        <div>
            <img src={logo} alt='SpaceX logo' style={{ width: '50px', height: '50px' }} className='logo'/> <span className='headerNav'><h1>Space Travelers' Hub</h1></span>
        </div>
        <div>
            <ul>
                <li>Rockets</li>
                <li>Missions</li>
                <li>My Profile</li>
            </ul>
        </div>
    </div>
    )
}

export default Header;
