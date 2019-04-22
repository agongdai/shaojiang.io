import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import root from './root/reducers';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  root,
});
