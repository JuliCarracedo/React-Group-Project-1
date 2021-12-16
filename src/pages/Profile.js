import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missionsList = useSelector(
    (state) => state.missionsReducer.missions,
  ).filter((mission) => mission.member);

  const dragons = [
    { title: 'Dragon1' },
    { title: 'Dragon2' },
    { title: 'Dragon3' },
  ];

  const reservedRockets = useSelector(
    (state) => state.rocketsReducer.rockets,
  ).filter((rocket) => rocket.reserved);

  return (
    <div className="profile">
      <section>
        <h2>My Missions</h2>
        {missionsList.length > 0 ? (
          <ul>
            {missionsList.map((mission) => (
              <li key={mission.name}>{mission.name}</li>
            ))}
          </ul>
        ) : (
          <p>No missions joined</p>
        )}
      </section>
      <section>
        <h2>My Dragons</h2>
        <ul>
          {dragons.map((dragon) => (
            <li key={dragon.title}>{dragon.title}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>My Rockets</h2>
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Profile;
