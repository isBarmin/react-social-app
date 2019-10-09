const initialState = {
  dialogs: [
    { id: 1, name: 'Dmitry' },
    { id: 2, name: 'Sasha' },
    { id: 3, name: 'Vasya' },
    { id: 4, name: 'Irina' },
    { id: 5, name: 'Petya' }
  ],

  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Yo' },
    { id: 3, message: 'How are you?' },
    { id: 4, message: 'I am fine' },
    { id: 5, message: 'gooood)' }
  ]
};

const dialogsReducer = (state = initialState, action) => {
  return state;
};

export default dialogsReducer;
