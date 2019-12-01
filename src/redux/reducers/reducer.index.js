import { combineReducers } from 'redux';
import loginReducer from './reducer.login';

const AppReducers = combineReducers({
    loginReducer
});

export default AppReducers;
