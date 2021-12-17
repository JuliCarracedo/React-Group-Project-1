import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Dragons.css';
import { reserveDragon, cancelReservation } from '../../redux/dragons/dragons';

const Dragons = () => {
  const dispatch = useDispatch();
  const { loading, dragons } = useSelector((state) => state.dragonsReducer);

  return (
    <div className="dragonContainer">
      { loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {dragons.map((dragon) => (
            <div className="dragonItem" key={dragon.id}>
              <div className="dragonImage">
                <img src={dragon.image[1]} alt="flickr_images" style={{ width: '200px', height: '150px' }} />
              </div>
              <div className="dragonDetails">
                <p>
                  {dragon.reserved && (
                    <button type="button" className="reservedIcon">Reserved</button>
                  )}
                  Name:
                  {dragon.name}
                </p>
                <p>
                  Type:
                  {dragon.type}
                </p>
                {!dragon.reserved && (
                  <button
                    type="button"
                    className="reserveBtn"
                    onClick={() => { dispatch(reserveDragon(dragon.id)); }}
                  >
                    Reserve Dragon
                  </button>
                )}
                {dragon.reserved && (
                <button
                  type="button"
                  className="reserveBtn1"
                  onClick={() => { dispatch(cancelReservation(dragon.id)); }}
                >
                  Cancel Reservation
                </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dragons;
