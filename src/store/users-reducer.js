import {
  SET_USERS,
  FOLLOW,
  UNFOLLOW,
  SET_TOTAL_USERS_COUNT,
  SET_CURRENT_PAGE
} from "./actionTypes";

const initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1
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

export default usersReducer;
