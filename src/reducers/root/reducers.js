import * as T from './types';

const initialState = {
  theme: 'light',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case T.ROOT_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
