import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missionsList = useSelector(
    (state) => state.missionsReducer.missions,
  ).filter((mission) => mission.member);
  const rockets = [{ title: 'Falcon' }, { title: 'Falcon Heavy' }, { title: 'Rocket' }];

  const dragonList = useSelector(
    (state) => state.dragonsReducer.dragons,
  ).filter((dragon) => dragon.reserved);

  return (
    <div className="profile">
      <section>
        <h2>My Missions</h2>
        {missionsList.length > 0 ? (
          <ul>
            {missionsList.map((mission) => <li key={mission.name}>{mission.name}</li>)}
          </ul>
        ) : <p>No missions joined</p>}
      </section>
      <section>
        <h2>My Dragons</h2>
        {dragonList.length > 0 ? (
          <ul>
            {dragonList.map((dragon) => <li key={dragon.id}>{dragon.name}</li>)}
          </ul>
        ) : <p>No reserved dragons</p> }
      </section>
      <section>
        <h2>My Rockets</h2>
        <ul>
          {rockets.map((rocket) => <li key={rocket.title}>{rocket.title}</li>)}
        </ul>
      </section>
    </div>
  );
};

export default Profile;
