import { UsersActionTypes } from "./usersTypes";

const INITIAL_STATE = {
    users: []
}

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UsersActionTypes.GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}


export default usersReducer;