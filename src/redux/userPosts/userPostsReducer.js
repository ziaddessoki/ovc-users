import { UserPostActionTypes } from "./userPostsTypes"

const INITIAL_STATE = {
    hideTable: true,
    userId: '',
    posts: []

}

const userPostsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserPostActionTypes.SHOW_HIDE_POSTS_TABLE:
            return {
                ...state,
                hideTable: !state.hideTable
            }
        case UserPostActionTypes.GET_USER_ID:
            return {
                ...state,
                userId: action.payload
            }
        case UserPostActionTypes.GET_USER_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}


export default userPostsReducer;