import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import persistState from 'redux-localstorage';
import reducers from 'Reducers';

const pathsInLocalStorage = require('Constants/settings.json').localStorage;

const enhancer = compose(
  applyMiddleware(thunkMiddleware, createLogger({
    collapsed: true,
  })),
  persistState(pathsInLocalStorage, {
    key: 'redux-localstorage',
  }),
);

export default (preloadedState) => {
  const store = createStore(
    reducers,
    preloadedState,
    enhancer,
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('Reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
