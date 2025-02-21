import { authAPI } from '../api/api';
import { SET_AUTH_USER_DATA } from './actionTypes';
import { stopSubmit } from 'redux-form';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

// reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data
      };

    default:
      return state;
  }
};

// action creators
export const setAuthUserDataAC = (userId, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  data: { userId, email, login, isAuth }
});

// thunk
export const getAuthUserDataTC = () => dispatch => {
  return authAPI.me().then(data => {
    const { id, email, login } = data.data;
    if (data.resultCode === 0) {
      dispatch(setAuthUserDataAC(id, email, login, true));
    }
  });
};

export const loginTC = (email, password, rememberMe) => dispatch => {
  authAPI.login(email, password, rememberMe).then(data => {
    if (data.resultCode === 0) {
      dispatch(getAuthUserDataTC());
    } else {
      const errorMessage = data.messages.length ? data.messages[0] : 'Error';
      dispatch(stopSubmit('login', { _error: errorMessage }));
    }
  });
};

export const logoutTC = () => dispatch => {
  authAPI.logout().then(data => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserDataAC(null, null, null, false));
    }
  });
};

export default authReducer;
