import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { loading, rockets } = useSelector((state) => state.rocketsReducer);

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
            <div key={rocket.id} className="rockets__container-rocket">
              <div className="rockets__container-rocket_img">
                <img alt="rocket" src={rocket.images[0]} />
              </div>
              <div className="rockets__container-rocket_details">
                <h2>{rocket.name}</h2>
                <p>{rocket.desc}</p>
                <button type="button">Reserve Rocket</button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Rockets;
