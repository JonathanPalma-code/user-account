import AuthReducer from './authReducer';
import PostReducer from './postReducer';
import ReportReducer from './reportReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: AuthReducer,
  post: PostReducer,
  report: ReportReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
