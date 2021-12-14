import React from 'react';
import './Rockets.css';

const rockets = [
  {
    name: 'Falcon 1',
    info: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: 'https://via.placeholder.com/150',
  },
  {
    name: 'Falcon 9',
    info: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: 'https://via.placeholder.com/150',
  },
  {
    name: 'Falcon Heavy',
    info: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: 'https://via.placeholder.com/150',
  },
];

const Rockets = () => (
  <section className="rockets">
    <hr />
    <div className="rockets__container">
      {rockets.map((rocket) => (
        <div key={`${rocket.name}_`} className="rockets__container-rocket">
          <div className="rockets__container-rocket_img">
            <img alt="rocket" src={rocket.img} />
          </div>
          <div className="rockets__container-rocket_details">
            <h2>{rocket.name}</h2>
            <p>{rocket.info}</p>
            <button type="button">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Rockets;
