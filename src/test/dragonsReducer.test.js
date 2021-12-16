import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Dragons from '../pages/Dragons/Dragons';
import dragonsReducer from '../redux/dragons/dragons';

test('renders dragons component', () => {
  render(<Provider store={store}><Dragons /></Provider>);
});

describe('Dragons Reducer Function', () => {
  const initialState = [];
  const dragons = [
    {
      id: 1,
      Name: 'Dragon 1',
      Type: 'capsule',
    },
    {
      id: 2,
      Name: 'Dragon 2',
      Type: 'capsule',
    },
  ];

  it('should return the initial state', () => {
    expect(dragonsReducer(undefined, {})).toEqual({ dragons: [], error: null, loading: true });
  });
  it('exists', () => {
    expect(dragonsReducer).toBeTruthy();
  });
  it('Returns dragons if given a populated GET_DRAGONS_SUCCESS action', () => {
    expect(dragonsReducer(initialState, { type: 'GET_DRAGONS_SUCCESS', payload: dragons }).dragons).toStrictEqual(dragons);
  });
  it('Returns an error if given GET_DRAGON_FAILED action', () => {
    expect(dragonsReducer(initialState, { type: 'GET_DRAGONS_FAILED', payload: 'critical error' }).error).toBe('critical error');
  });
  it('Returns a mission as joined if its id is sent in a JOIN_MISSION action', () => {
    const newState = dragonsReducer(initialState, { type: 'GET_DRAGONS_SUCCESS', payload: dragons });
    expect(dragonsReducer(newState, { type: 'RESERVE_DRAGON', payload: 1 }).dragons[0].reserved).toBe(true);
  });
  it('Returns a mission as joined if its id is sent in a JOIN_MISSION action', () => {
    const newState = dragonsReducer(initialState, { type: 'GET_DRAGONS_SUCCESS', payload: dragons });
    expect(dragonsReducer(newState, { type: 'CANCEL_DRAGON_RESERVATION', payload: 1 }).dragons[0].reserved).toBe(false);
  });
});
