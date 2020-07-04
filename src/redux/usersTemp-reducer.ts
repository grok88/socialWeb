export type setUsersACType = {
    type: 'SET-USERS-TEMP',
    usersTemp: Array<usersTempReducerType>
}
export type setStatusACType = {
    type: 'SET-STATUS',
    status: string
}
export type setUsersCurrentPageACType = {
    type: 'SET-USERS-TEMP-CURRENT-PAGE',
    currentPage: number
}

export type UsersTempReducerAC = setUsersACType | setStatusACType | setUsersCurrentPageACType;

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

export  type UsersTempReducerInitialStateType = {
    status: string,
    usersTemp: Array<any>,
    currentPage: number,
    pageSize: number,
    totalUserTempCount: number
}
let initialState = {
    status: statuses.NOT_INITIALAZED,
    usersTemp: [],
    currentPage: 1,
    pageSize: 5,
    totalUserTempCount:56
}


const usersTempReducer = (state: UsersTempReducerInitialStateType = initialState, action: UsersTempReducerAC) => {
    switch (action.type) {
        case 'SET-STATUS' : {
            return {
                ...state,
                status: action.status
            }
        }
        case 'SET-USERS-TEMP' : {
            return {
                ...state,
                usersTemp: action.usersTemp
            }
        }
        case 'SET-USERS-TEMP-CURRENT-PAGE' : {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        default:
            return state;
    }
}

export const setUsersAC = (usersTemp: Array<usersTempReducerType>): setUsersACType => {
    return {
        type: 'SET-USERS-TEMP',
        usersTemp
    }
}
export const setUsersCurrentPageAC = (currentPage: number): setUsersCurrentPageACType => {
    return {
        type: 'SET-USERS-TEMP-CURRENT-PAGE',
        currentPage
    }
}
export const setStatusAC = (status: string): setStatusACType => {
    return {
        type: 'SET-STATUS',
        status
    }
}

export default usersTempReducer;