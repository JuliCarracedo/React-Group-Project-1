import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dragonsReducer from './dragons/dragons';

const finalReducer = combineReducers({
  dragonsReducer,
});

const store = createStore(finalReducer, applyMiddleware(logger, thunk));

export default store;
