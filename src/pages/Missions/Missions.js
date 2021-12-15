import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const { loading, missions } = useSelector((state) => state.missionsReducer);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

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
                  <button type="button"> Leave Mission</button>
                </td>
              )}
              {!mission.member && (
                <td>
                  {' '}
                  <button type="button"> Join Mission</button>
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
