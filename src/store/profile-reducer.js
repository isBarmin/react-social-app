import { CHANGE_NEW_POST_TEXT, ADD_POST } from './actionTypes';

const initialState = {
  posts: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Yo' },
    { id: 3, message: 'How are you?' },
    { id: 4, message: 'I am fine' },
    { id: 5, message: 'gooood)' }
  ],
  newPostText: ''
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
        newPostText: ''
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

export default profileReducer;
