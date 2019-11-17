import { ADD_MESSAGE } from "./actionTypes";

const initialState = {
  dialogs: [
    { id: 1, name: "Dmitry" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Vasya" },
    { id: 4, name: "Irina" },
    { id: 5, name: "Petya" }
  ],

  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Yo" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "I am fine" },
    { id: 5, message: "gooood)" }
  ]
};

//  reducer
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: 10,
        message: action.messageText
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };

    default:
      return state;
  }
};

// action creators
// export const changeNewMessageTextAC = text => ({
//   type: CHANGE_NEW_MESSAGE_TEXT,
//   text
// });

export const addMessageAC = messageText => ({
  type: ADD_MESSAGE,
  messageText
});

export default dialogsReducer;
