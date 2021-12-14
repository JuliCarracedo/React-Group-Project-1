import React from 'react';

const missionsList = [
  {
    missionName: 'Thaicom',
    missionDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem erat, euismod at eros luctus, vulputate laoreet arcu. Duis a pharetra neque. Donec auctor nec sapien id pulvinar. Proin egestas, libero in pellentesque lobortis, nulla metus sodales mauris, mattis imperdiet ante ex eu urna. Nullam dictum eget enim vitae sagittis. Vestibulum elementum auctor dui auctor consequat.',
    activeMember: false,
  },
  {
    missionName: 'Command',
    missionDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem erat, euismod at eros luctus, vulputate laoreet arcu. Duis a pharetra neque. Donec auctor nec sapien id pulvinar. Proin egestas, libero in pellentesque lobortis, nulla metus sodales mauris, mattis imperdiet ante ex eu urna. Nullam dictum eget enim vitae sagittis. Vestibulum elementum auctor dui auctor consequat.',
    activeMember: true,
  },
  {
    missionName: 'Goliath',
    missionDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem erat, euismod at eros luctus, vulputate laoreet arcu. Duis a pharetra neque. Donec auctor nec sapien id pulvinar. Proin egestas, libero in pellentesque lobortis, nulla metus sodales mauris, mattis imperdiet ante ex eu urna. Nullam dictum eget enim vitae sagittis. Vestibulum elementum auctor dui auctor consequat.',
    activeMember: false,
  },
];

const Missions = () => (
  <div>
    <table>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th>Invisible</th>
      </tr>
      {missionsList.map((mission) => (
        <tr key={mission.missionName}>
          <td>{mission.missionName}</td>
          <td>{mission.missionDescription}</td>
          {mission.activeMember && <td> Active Member </td>}
          {!mission.activeMember && <td> Not a member </td>}
          {mission.activeMember && (
          <td>
            {' '}
            <button type="button"> Leave Mission</button>
          </td>
          )}
          {!mission.activeMember && (
          <td>
            {' '}
            <button type="button"> Join Mission</button>
            {' '}
          </td>
          )}
        </tr>
      ))}
    </table>
  </div>
);

export default Missions;
