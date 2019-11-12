import {
  CHANGE_NEW_POST_TEXT,
  ADD_POST,
  SET_USER_PROFILE,
  SET_USER_STATUS
} from "./actionTypes";
import { usersAPI, profileAPI } from "../api/api";

const initialState = {
  posts: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Yo" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "I am fine" },
    { id: 5, message: "gooood)" }
  ],
  newPostText: "",
  userProfile: null,
  userStatus: null
};

// reducer
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
      };

    case ADD_POST:
      const newPost = {
        id: 10,
        message: state.newPostText
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.profile
      };

    case SET_USER_STATUS:
      return {
        ...state,
        userStatus: action.status
      };

    default:
      return state;
  }
};

// action creators
export const changeNewPostTextAC = text => ({
  type: CHANGE_NEW_POST_TEXT,
  text
});

export const addPostAC = () => ({
  type: ADD_POST
});

export const setUserProfileAC = profile => ({
  type: SET_USER_PROFILE,
  profile
});

export const setUserStatusAC = status => ({
  type: SET_USER_STATUS,
  status
});

// thunk
export const getUserProfileTC = userId => dispatch => {
  usersAPI.getUserProfile(userId).then(profile => {
    dispatch(setUserProfileAC(profile));
  });
};

export const getUserStatusTC = userId => dispatch => {
  profileAPI.getStatus(userId).then(status => {
    dispatch(setUserStatusAC(status));
  });
};

export const updateUserStatusTC = status => dispatch => {
  profileAPI.updateStatus(status).then(response => {
    if (response.resultCode === 0) {
      dispatch(setUserStatusAC(status));
    }
  });
};

export default profileReducer;
