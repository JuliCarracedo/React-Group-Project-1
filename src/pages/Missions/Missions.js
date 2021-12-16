import { useSelector } from 'react-redux';
import JoinButton from './JoinButton';
import LeaveButton from './LeaveMission';

const Missions = () => {
  const { loading, missions } = useSelector((state) => state.missionsReducer);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Invisible</th>
          </tr>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.desc}</td>
              {mission.member && <td> Active Member </td>}
              {!mission.member && <td> Not a member </td>}
              {mission.member && (
                <td>
                  {' '}
                  <LeaveButton id={mission.id} />
                </td>
              )}
              {!mission.member && (
                <td>
                  {' '}
                  <JoinButton id={mission.id} />
                  {' '}
                </td>
              )}
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};

export default Missions;
