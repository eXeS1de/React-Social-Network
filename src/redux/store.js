import { combineReducers, legacy_createStore } from 'redux';
import dialogsReducer from './reducers/dialogsReducer';
import profileReducer from './reducers/profileReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

let store = legacy_createStore(reducers);

export default store;