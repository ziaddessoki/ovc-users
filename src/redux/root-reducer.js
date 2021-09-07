import { combineReducers } from "redux";

import usersReducer from "./users/usersReducer";
import userPostsReducer from "./userPosts/userPostsReducer";

export default combineReducers({
    users: usersReducer,
    posts: userPostsReducer
})