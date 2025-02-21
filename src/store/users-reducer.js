import { usersAPI } from "../api/api";
import {
  SET_USERS,
  FOLLOW,
  UNFOLLOW,
  SET_TOTAL_USERS_COUNT,
  SET_CURRENT_PAGE,
  SET_IS_FETCHING,
  SET_FOLLOWING_PROGRESS
} from "./actionTypes";

const initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followedInProgress: []
};

// reducer
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };

    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        })
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };

    case SET_FOLLOWING_PROGRESS:
      return {
        ...state,
        followedInProgress: action.isFetching
          ? [...state.followedInProgress, action.userId]
          : state.followedInProgress.filter(id => id !== action.userId)
      };

    default:
      return state;
  }
};

// action creatots
export const setUsersAC = users => ({
  type: SET_USERS,
  users
});

export const followAC = userId => ({
  type: FOLLOW,
  userId
});

export const unfollowAC = userId => ({
  type: UNFOLLOW,
  userId
});

export const setTotalUsersCountAC = totalUsersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount
});

export const setCurrentPageAC = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});

export const setIsFetchingAC = isFetching => ({
  type: SET_IS_FETCHING,
  isFetching
});

export const setFollowingProgressAC = (isFetching, userId) => ({
  type: SET_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

// thunk
export const getUsersTC = (page, pageSize) => dispatch => {
  dispatch(setIsFetchingAC(true));
  usersAPI.getUsers(page, pageSize).then(data => {
    const users = data.items;
    dispatch(setUsersAC(users));
    dispatch(setTotalUsersCountAC(data.totalCount));
    dispatch(setIsFetchingAC(false));
  });
};

export const followTC = userId => dispatch => {
  dispatch(setFollowingProgressAC(true, userId));
  usersAPI.follow(userId).then(response => {
    if (response.resultCode === 0) {
      dispatch(followAC(userId));
    }
    dispatch(setFollowingProgressAC(false, userId));
  });
};

export const unfollowTC = userId => dispatch => {
  dispatch(setFollowingProgressAC(true, userId));
  usersAPI.unfollow(userId).then(response => {
    if (response.resultCode === 0) {
      dispatch(unfollowAC(userId));
    }
    dispatch(setFollowingProgressAC(false, userId));
  });
};

export default usersReducer;
