import {createStore, compose, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from '../reducer';

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
