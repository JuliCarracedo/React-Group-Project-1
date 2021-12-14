import React from 'react';
import './Dragons.css';

const Dragons = () => {
  const dragons = [
    {
      id: 1,
      name: 'Falcon 1',
      type: 'SpaceX1',
    },
    {
      id: 2,
      name: 'Falcon 9',
      type: 'SpaceX2',
    },
    {
      id: 3,
      name: 'Falcon Heavy',
      type: 'SpaceX3',
    },
  ];

  return (
    <div className="dragonContainer">
      {dragons.map((dragon) => (
        <div className="dragonItem" key={dragon.id}>
          <div className="dragonImage">
            <img src="" alt="flickr_images" />
          </div>
          <div className="dragonDetails">
            <p>
              Name:
              {dragon.name}
            </p>
            <button type="button" className="reservedIcon">Reserved</button>
            <p>
              Type:
              {dragon.type}
            </p>
            <button type="button" className="reserveBtn">Reserve Dragon</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dragons;
