const initialState = {
  posts: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Yo' },
    { id: 3, message: 'How are you?' },
    { id: 4, message: 'I am fine' },
    { id: 5, message: 'gooood)' }
  ]
};

const profileReducer = (state = initialState, action) => {
  return state;
};

export default profileReducer;
