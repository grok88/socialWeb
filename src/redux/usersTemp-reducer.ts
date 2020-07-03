import {UsersReducerInitialStateType} from "./users-reducer";

export type setUsersACType = {
    type: 'SET-USERS',
    users: Array<usersTempReducerType>
}
export type setStatusACType = {
    type: 'SET-STATUS',
    status:string
}

export type UsersTempReducerAC = setUsersACType | setStatusACType;

export type usersTempReducerType = {
    id: number,
    photos: {
        small: string | null,
        large: string | null
    }
    followed: boolean,
    name: string,
    status: string | null,
    uniqueUrlName: string | null
}


export const statuses = {
    NOT_INITIALAZED: 'NOT-INITIALAZED',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    CAPTCHAREQUIRED: 'CAPTCHAREQUIRED',
    SUCCESS: 'SUCCESS'
}

export  type usersTempReducerInitialStateType = {
    status: string,
    users: Array<any>
}
let initialState = {
    status: statuses.NOT_INITIALAZED,
    users: []
}


const usersTempReducer = (state: usersTempReducerInitialStateType = initialState, action: UsersTempReducerAC) => {

    switch (action.type) {
        case 'SET-STATUS' :{
            return {
                ...state,
                status:action.status
            }
        }
        case 'SET-USERS' :{
            return {
                ...state,
                users:action.users
            }
        }
        default:
            return state;
    }
}

export const setUsersAC = (users: Array<usersTempReducerType>): setUsersACType => {
    return {
        type: 'SET-USERS',
        users
    }
}
export const setStatusAC = (status:string ): setStatusACType => {
    return {
        type: 'SET-STATUS',
        status
    }
}

export default usersTempReducer;