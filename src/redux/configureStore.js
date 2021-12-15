import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';

const finalReducer = combineReducers({
  rocketsReducer,
});

const store = createStore(finalReducer, applyMiddleware(logger, thunk));

export default store;
