import {UserType} from "./users-reducer";

const SET_USERS = 'SW/FRIENDS/SET-USERS';
const SET_STATUS = 'SW/FRIENDS/SET-STATUS';

export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    SUCCESS: 'SUCCESS'
}

export type NavbarReducerInitialState = {
    users: Array<UserType>;
    status: string;
}

let initialState: NavbarReducerInitialState = {
    users: [],
    status: statuses.NOT_INITIALIZED,
}

type setStatusFriendsACType = {
    type: typeof SET_STATUS,
    status: string;
}
type setUsersFriendsACType = {
    type: typeof SET_USERS,
    users: Array<UserType>;
}

export type NavbarReducerAC = setStatusFriendsACType | setUsersFriendsACType;

const navbarReducer = (state: NavbarReducerInitialState = initialState, action: NavbarReducerAC):NavbarReducerInitialState => {

    switch (action.type) {
        case SET_STATUS :
            return {
                ...state,
                status: action.status
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default :
            return state;
    }
}


export const setStatusFriends = (status: string): setStatusFriendsACType => {
    return {
        type: SET_STATUS,
        status
    }
}
export const setUsersFriends = (users: Array<UserType>): setUsersFriendsACType => {
    return {
        type: SET_USERS,
        users
    }
}

export default navbarReducer;