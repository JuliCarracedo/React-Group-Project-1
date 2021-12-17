const GET_MISSIONS_REQUEST = 'GET_MISSIONS_REQUEST';
const GET_MISSIONS_SUCCESS = 'GET_MISSIONS_SUCCESS';
const GET_MISSIONS_FAILED = 'GET_MISSIONS_FAILED';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

export const getMissions = () => (dispatch) => {
  dispatch({ type: GET_MISSIONS_REQUEST });

  const fetchMissions = async () => {
    try {
      const data = await fetch('https://api.spacexdata.com/v3/missions');
      const missions = await data.json();
      const payload = missions.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        desc: mission.description,
        member: false,
      }));
      dispatch({ type: GET_MISSIONS_SUCCESS, payload });
    } catch (e) {
      dispatch({
        type: GET_MISSIONS_FAILED,
        payload: 'Ooops! Something bad happened.',
      });
    }
  };
  fetchMissions();
};

export const joinMission = (missionId) => ({
  type: JOIN_MISSION,
  payload: missionId,
});

export const leaveMission = (missionId) => ({
  type: LEAVE_MISSION,
  payload: missionId,
});

const initialState = {
  loading: true,
  missions: [],
  error: null,
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS_REQUEST:
      return { ...state, loading: true };
    case GET_MISSIONS_SUCCESS:
      return { ...state, loading: false, missions: action.payload };
    case GET_MISSIONS_FAILED:
      return { ...state, loading: false, error: action.payload };
    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map(
          (mission) => ({
            ...mission,
            member: (mission.id === action.payload) ? true : mission.member,
          }),
        ),
      };
    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map(
          (mission) => ({
            ...mission,
            member: (mission.id === action.payload) ? false : mission.member,
          }),
        ),
      };
    default:
      return state;
  }
};

export default missionsReducer;
