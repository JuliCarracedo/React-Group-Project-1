import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelReservation } from '../../redux/rockets/rockets';
import './Profile.css';

const Profile = () => {
  const missionsList = useSelector(
    (state) => state.missionsReducer.missions,
  ).filter((mission) => mission.member);

  const dragonList = useSelector(
    (state) => state.dragonsReducer.dragons,
  ).filter((dragon) => dragon.reserved);

  const reservedRockets = useSelector(
    (state) => state.rocketsReducer.rockets,
  ).filter((rocket) => rocket.reserved);

  const dispatch = useDispatch();

  return (
    <div className="profile">
      <section className="profile__section">
        <h2>My Missions</h2>
        {missionsList.length > 0 ? (
          <ul className="profile__section-list">
            {missionsList.map((mission) => (
              <li key={mission.name}>{mission.name}</li>
            ))}
          </ul>
        ) : (
          <p>No missions joined</p>
        )}
      </section>
      <section className="profile__section">
        <h2>My Dragons</h2>
        {dragonList.length > 0 ? (
          <ul className="profile__section-list">
            {dragonList.map((dragon) => (
              <li key={dragon.id}>{dragon.name}</li>
            ))}
          </ul>
        ) : (
          <p>No reserved dragons</p>
        )}
      </section>
      <section className="profile__section">
        <h2>My Rockets</h2>
        {reservedRockets.length ? (
          <ul className="profile__section-list">
            {reservedRockets.map((rocket) => (
              <div className="profile__section-list_container" key={rocket.id}>
                <li>{rocket.name}</li>
                <button
                  type="button"
                  style={{ color: '#000', background: 'transparent' }}
                  onClick={() => dispatch(cancelReservation(rocket.id))}
                >
                  Cancel Reservation
                </button>
              </div>
            ))}
          </ul>
        ) : (
          'No reserved rockets'
        )}
      </section>
    </div>
  );
};

export default Profile;
