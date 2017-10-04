import {combineReducers} from  'redux';

import userReducer from './user/user_reducer';
import postReducer from './post/post_reducer';

const allReducers = combineReducers({
    users: userReducer,
    posts: postReducer
});

export default allReducers;