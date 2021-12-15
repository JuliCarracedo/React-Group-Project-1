const GET_DRAGONS_REQUEST = 'GET_DRAGONS_REQUEST';
const GET_DRAGONS_SUCCESS = 'GET_DRAGONS_SUCCESS';
const GET_DRAGONS_FAILED = 'GET_DRAGONS_FAILED';

export const getDragons = () => (dispatch) => {
  dispatch({ type: GET_DRAGONS_REQUEST });

  const fetchDragons = async () => {
    try {
      const data = await fetch('https://api.spacexdata.com/v3/dragons');
      const dragons = await data.json();
      const payload = dragons.map((dragon) => ({
        id: dragon.id,
        name: dragon.name,
        type: dragon.type,
        image: dragon.flickr_images,
      }));
      dispatch({ type: GET_DRAGONS_SUCCESS, payload });
    } catch (e) {
      dispatch({
        type: GET_DRAGONS_FAILED,
        payload: 'Ooops! Something bad happened.',
      });
    }
  };
  fetchDragons();
};

const initialState = {
  loading: true,
  dragons: [],
  error: null,
};

const dragonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRAGONS_REQUEST:
      return { ...state, loading: true };
    case GET_DRAGONS_SUCCESS:
      return { ...state, loading: false, dragons: action.payload };
    case GET_DRAGONS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default dragonsReducer;
