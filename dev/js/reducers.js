import {combineReducers} from  'redux';

import userReducer from './user/user_reducer';

const allReducers = combineReducers({
    users: userReducer
});

export default allReducers;