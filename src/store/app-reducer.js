import { getAuthUserDataTC } from './auth-reducer';
import { INITIALIZED_SUCCESS } from './actionTypes';

const initialState = {
  initialized: false
};

// reducer
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
};

// action creators
export const initializedSuccessAC = () => ({
  type: INITIALIZED_SUCCESS
});

// thunk
export const initializeAppTC = () => dispatch => {
  const promise = dispatch(getAuthUserDataTC());

  Promise.all([promise]).then(() => {
    dispatch(initializedSuccessAC());
  });
};

export default appReducer;
