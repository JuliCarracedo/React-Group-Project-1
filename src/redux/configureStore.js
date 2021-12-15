import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dragonsReducer from './dragons/dragons';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const finalReducer = combineReducers({
  rocketsReducer, missionsReducer, dragonsReducer,
});

const store = createStore(finalReducer, applyMiddleware(logger, thunk));

export default store;
