import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../../components/Rocket/Rocket';
import { getRockets, reserveRocket } from '../../redux/rockets/rockets';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { loading, rockets } = useSelector((state) => state.rocketsReducer);

  const onReserveRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <section className="rockets">
      <hr />
      <div className="rockets__container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          rockets.map((rocket) => (
            <Rocket
              key={rocket.id}
              rocket={rocket}
              reserveRocket={onReserveRocket}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Rockets;
