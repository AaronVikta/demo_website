import {combineReducers} from 'redux';
import auth from './authReducers';
import admin from './adminReducer';

export default combineReducers({
  auth,
  admin
})
