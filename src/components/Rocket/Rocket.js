import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket, reserveRocket }) => (
  <div className="rockets__container-rocket">
    <div className="rockets__container-rocket_img">
      <img alt="rocket" src={rocket.images[0]} />
    </div>
    <div className="rockets__container-rocket_details">
      <h2>{rocket.name}</h2>
      <p>{rocket.desc}</p>
      <button type="button" onClick={() => reserveRocket(rocket.id)}>Reserve Rocket</button>
    </div>
  </div>
);

Rocket.propTypes = {
  rocket: PropTypes.instanceOf(Object).isRequired,
  reserveRocket: PropTypes.func.isRequired,
};

export default Rocket;
