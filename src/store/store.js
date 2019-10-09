import { createStore, combineReducers } from 'redux';

import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

const reducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer
});

const store = createStore(reducer);

export default store;
