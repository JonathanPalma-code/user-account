import AuthReducer from './authReducer';
import PostReducer from './postReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: AuthReducer,
  post: PostReducer,
  firestore: firestoreReducer
});

export default rootReducer;
