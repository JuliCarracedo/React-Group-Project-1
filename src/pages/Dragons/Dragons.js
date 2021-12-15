import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Dragons.css';
import { getDragons } from '../../redux/dragons/dragons';

const Dragons = () => {
  const dispatch = useDispatch();
  const { loading, dragons } = useSelector((state) => state.dragonsReducer);

  useEffect(() => {
    dispatch(getDragons);
  }, [dispatch]);

  return (
    <div className="dragonContainer">
      { loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {dragons.map((dragon) => (
            <div className="dragonItem" key={dragon.id}>
              <div className="dragonImage">
                <img src={dragon.image[1]} alt="flickr_images" />
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
      )}
    </div>
  );
};
export default Dragons;
