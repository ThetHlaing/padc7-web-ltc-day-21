import {combineReducers} from 'redux';
import messages from './messages';
import typing_status from './typing';
import currentUser from './currentUser';

export default combineReducers({messages,typing_status,currentUser});