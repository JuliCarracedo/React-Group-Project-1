import React from 'react';
import PropTypes from 'prop-types';
import './Rocket.css';

const Rocket = ({ rocket, reserveRocket, cancelReservation }) => (
  <div className="rockets__container-rocket">
    <div className="rockets__container-rocket_img">
      <img alt="rocket" src={rocket.images[0]} />
    </div>
    <div className="rockets__container-rocket_details">
      <h2>{rocket.name}</h2>
      <p>
        {rocket.reserved && <span className="badge">reserved</span>}
        {rocket.desc}
      </p>
      {rocket.reserved ? (
        <button type="button" onClick={() => cancelReservation(rocket.id)}>
          Cancel Reservation
        </button>
      ) : (
        <button type="button" onClick={() => reserveRocket(rocket.id)}>
          Reserve Rocket
        </button>
      )}
    </div>
  </div>
);

Rocket.propTypes = {
  rocket: PropTypes.instanceOf(Object).isRequired,
  reserveRocket: PropTypes.func.isRequired,
  cancelReservation: PropTypes.func.isRequired,
};

export default Rocket;
