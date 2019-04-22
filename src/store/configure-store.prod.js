import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import persistState from 'redux-localstorage';
import rootReducer from 'Reducers';

const pathsInLocalStorage = require('Constants/settings.json').localStorage;

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  persistState(pathsInLocalStorage, {
    key: 'redux-localstorage',
  }),
);

export default (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    enhancer,
  );
  return store;
};
