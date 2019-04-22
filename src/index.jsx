import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'Store/configure-store';
import App from './App';

const store = configureStore({});

ReactDOM.render(
  <App store={store} id="app" />,
  document.getElementById('app'),
);
