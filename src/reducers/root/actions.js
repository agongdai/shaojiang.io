import { createAction } from 'Utils/action';
import * as T from './types';

export const switchTheme = theme => (dispatch) => {
  dispatch(createAction(T.ROOT_THEME, theme));
};
