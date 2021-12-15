const GET_ROCKETS_REQUEST = 'GET_ROCKETS_REQUEST';
const GET_ROCKETS_SUCCESS = 'GET_ROCKETS_SUCCESS';
const GET_ROCKETS_FAILED = 'GET_ROCKETS_FAILED';

export const getRockets = () => (dispatch) => {
  dispatch({ type: GET_ROCKETS_REQUEST });

  const fetchRockets = async () => {
    try {
      const data = await fetch('https://api.spacexdata.com/v3/rockets');
      const rockets = await data.json();
      const payload = rockets.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        desc: rocket.description,
        images: rocket.flickr_images,
      }));
      dispatch({ type: GET_ROCKETS_SUCCESS, payload });
    } catch (e) {
      dispatch({
        type: GET_ROCKETS_FAILED,
        payload: 'Ooops! Something bad happened.',
      });
    }
  };
  fetchRockets();
};

const initialState = {
  loading: true,
  rockets: [],
  error: null,
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS_REQUEST:
      return { ...state, loading: true };
    case GET_ROCKETS_SUCCESS:
      return { ...state, loading: false, rockets: action.payload };
    case GET_ROCKETS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default rocketsReducer;
