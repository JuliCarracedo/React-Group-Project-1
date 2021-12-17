import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../../components/Rocket/Rocket';
import { cancelReservation, reserveRocket } from '../../redux/rockets/rockets';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { loading, rockets, error } = useSelector((state) => state.rocketsReducer);

  const onReserveRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  const onCancelReservation = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <section className="rockets">
      <div className="rockets__container">
        {error && <p>{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          rockets.map((rocket) => (
            <Rocket
              key={rocket.id}
              rocket={rocket}
              reserveRocket={onReserveRocket}
              cancelReservation={onCancelReservation}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Rockets;
