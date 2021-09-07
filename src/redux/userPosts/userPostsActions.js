import { UserPostActionTypes } from "./userPostsTypes";

export const showPostsTable = () => ({
    type: UserPostActionTypes.SHOW_HIDE_POSTS_TABLE
})

export const getUserId = userID => ({
    type: UserPostActionTypes.GET_USER_ID,
    payload: userID
})

export const getUserPosts = posts => ({
    type: UserPostActionTypes.GET_USER_POSTS,
    payload: posts
});