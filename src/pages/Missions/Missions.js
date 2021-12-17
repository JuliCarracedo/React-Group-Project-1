import { useSelector } from 'react-redux';
import JoinButton from './JoinButton';
import LeaveButton from './LeaveMission';
import './Missions.css';

const Missions = () => {
  const { loading, missions } = useSelector((state) => state.missionsReducer);

  return (
    <div className="missions-main">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <tr>
            <th>Mission</th>
            <th className="desc-row">Description</th>
            <th className="badge-row">Status</th>
            <th className="btn-row inv-text">Invisible</th>
          </tr>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td className="desc-row">{mission.desc}</td>
              {mission.member && (
              <td className="badge-row">
                {' '}
                <p className="member-badge">Active Member </p>
              </td>
              )}
              {!mission.member && (
              <td className="badge-row">
                {' '}
                <p className="not-member-badge">NOT A MEMBER </p>
                {' '}
              </td>
              )}
              {mission.member && (
                <td className="btn-row">
                  {' '}
                  <LeaveButton id={mission.id} />
                </td>
              )}
              {!mission.member && (
                <td className="btn-row">
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
