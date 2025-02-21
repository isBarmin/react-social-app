import { createStore, combineReducers, applyMiddleware } from "redux";

import appReducer from "./app-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const reducer = combineReducers({
  app: appReducer,
  profile: profileReducer,
  dialogs: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
