import { UsersActionTypes } from "./usersTypes";

export const getUsers = users => ({
    type: UsersActionTypes.GET_USERS,
    payload: users
});