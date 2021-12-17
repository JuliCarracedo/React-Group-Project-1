import rocketsReducer from '../redux/rockets/rockets';

describe('rocketsReducer', () => {
  const rockets = [
    {
      id: 1,
      name: 'Some rocket',
      desc: 'Some rocket description',
      images: [],
      reserved: false,
    },
    {
      id: 2,
      name: 'Another rocket',
      desc: 'Another rocket description',
      images: [],
      reserved: true,
    },
  ];

  const rocketsState = rocketsReducer({}, { type: 'GET_ROCKETS_SUCCESS', payload: rockets });

  it('should return the initial state', () => {
    expect(rocketsReducer(undefined, {})).toEqual({ error: null, rockets: [], loading: true });
  });

  it('returns a rockets when a GET_ROCKETS_SUCCESS action is dispatched', () => {
    expect(rocketsReducer({}, { type: 'GET_ROCKETS_SUCCESS', payload: rockets }).rockets).toHaveLength(2);
    expect(rocketsReducer({}, { type: 'GET_ROCKETS_SUCCESS', payload: rockets }).error).toBeUndefined();
  });

  it('returns an error if GET_ROCKETS_FAILED action is dispatched', () => {
    expect(rocketsReducer({}, { type: 'GET_ROCKETS_FAILED', payload: 'error' }).error).toBe('error');
  });

  it('returns a truthy reserved key if the rocket is reserved', () => {
    expect(rockets[0].reserved).toBe(false);
    expect(rocketsReducer(rocketsState, { type: 'RESERVE_ROCKET', payload: 1 }).rockets[0].reserved).toBe(true);
  });

  it('returns a falsy reserved key if the rocket reservation is cancelled', () => {
    expect(rockets[1].reserved).toBe(true);
    expect(rocketsReducer(rocketsState, { type: 'CANCEL_ROCKET_RESERVATION', payload: 2 }).rockets[1].reserved).toBe(false);
  });
});
