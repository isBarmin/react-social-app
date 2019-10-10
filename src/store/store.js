import { createStore, combineReducers } from 'redux';

import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';

const reducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  usersPage: usersReducer
});

const store = createStore(reducer);

export default store;
