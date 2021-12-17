const GET_DRAGONS_REQUEST = 'GET_DRAGONS_REQUEST';
const GET_DRAGONS_SUCCESS = 'GET_DRAGONS_SUCCESS';
const GET_DRAGONS_FAILED = 'GET_DRAGONS_FAILED';
const RESERVE_DRAGON = 'RESERVE_DRAGON';
const CANCEL_DRAGON_RESERVATION = 'CANCEL_DRAGON_RESERVATION';

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

export const reserveDragon = (id) => (dispatch) => {
  dispatch({ type: RESERVE_DRAGON, payload: id });
};

export const cancelReservation = (id) => (dispatch) => {
  dispatch({ type: CANCEL_DRAGON_RESERVATION, payload: id });
};

const dragonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRAGONS_REQUEST:
      return { ...state, loading: true };
    case GET_DRAGONS_SUCCESS:
      return { ...state, loading: false, dragons: action.payload };
    case GET_DRAGONS_FAILED:
      return { ...state, loading: false, error: action.payload };
    case RESERVE_DRAGON:
      return {
        ...state,
        dragons: state.dragons.map((dragon) => (
          dragon.id === action.payload ? { ...dragon, reserved: true } : dragon
        )),
      };
    case CANCEL_DRAGON_RESERVATION:
      return {
        ...state,
        dragons: state.dragons.map((dragon) => (
          dragon.id === action.payload ? { ...dragon, reserved: false } : dragon
        )),
      };
    default:
      return state;
  }
};

export default dragonsReducer;
