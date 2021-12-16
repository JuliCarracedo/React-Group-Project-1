import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missionsList = useSelector(
    (state) => state.missionsReducer.missions,
  ).filter((mission) => mission.member);
  const rockets = [{ title: 'Falcon' }, { title: 'Falcon Heavy' }, { title: 'Rocket' }];
  const dragons = [{ title: 'Dragon1' }, { title: 'Dragon2' }, { title: 'Dragon3' }];

  return (
    <div className="profile">
      <section>
        <h2>My Missions</h2>
        <ul>
          {missionsList.map((mission) => <li key={mission.name}>{mission.name}</li>)}
        </ul>
      </section>
      <section>
        <h2>My Dragons</h2>
        <ul>
          {dragons.map((dragon) => <li key={dragon.title}>{dragon.title}</li>)}
        </ul>
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
