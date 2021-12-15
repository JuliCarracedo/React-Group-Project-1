const GET_MISSIONS_REQUEST = 'GET_MISSIONS_REQUEST';
const GET_MISSIONS_SUCCESS = 'GET_MISSIONS_SUCCESS';
const GET_MISSIONS_FAILED = 'GET_MISSIONS_FAILED';

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
    default:
      return state;
  }
};

export default missionsReducer;
