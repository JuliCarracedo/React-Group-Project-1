import React from 'react';

const Profile = () => {
  const missions = [{ title: 'Thaicom' }, { title: 'Goliath' }, { title: 'Titan' }];
  const rockets = [{ title: 'Falcon' }, { title: 'Falcon Heavy' }, { title: 'Rocket' }];
  const dragons = [{ title: 'Dragon1' }, { title: 'Dragon2' }, { title: 'Dragon3' }];

  return (
    <div>
      <section>
        <h2>My Missions</h2>
        <ul>
          {missions.map((mission) => <li key={mission.title}>{mission.title}</li>)}
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
