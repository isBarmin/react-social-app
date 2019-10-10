import { SET_USERS, FOLLOW, UNFOLLOW } from './actionTypes';

const initialState = {
  users: [
    {
      id: 1,
      photoUrl: 'https://avatars.dicebear.com/v2/male/Dmitry.svg',
      fullName: 'Dmitry',
      status: 'I am a boss',
      location: { city: 'Minsk', country: 'Belarus' },
      followed: false
    },
    {
      id: 2,
      photoUrl: 'https://avatars.dicebear.com/v2/male/Sanya.svg',
      fullName: 'Sasha',
      status: 'I am a boss',
      location: { city: 'Moscow', country: 'Moscow' },
      followed: true
    },
    {
      id: 3,
      photoUrl: 'https://avatars.dicebear.com/v2/male/Petya.svg',
      fullName: 'Petya',
      status: 'I am a boss',
      location: { city: 'Kiev', country: 'Ukraine' },
      followed: false
    }
  ]
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

export default usersReducer;
