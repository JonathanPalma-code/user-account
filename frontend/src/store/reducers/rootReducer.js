import AuthReducer from './authReducer';
import PostReducer from './postReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: AuthReducer,
  post: PostReducer
});

export default rootReducer;
