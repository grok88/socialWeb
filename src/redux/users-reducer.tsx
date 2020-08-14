export type UserType = {
    id: string;
    userUrl: string;
    photos: {
        small: string | null;
        large: string | null;
    }
    followed: boolean;
    name: string;
    status: string;
    location: {
        country: string;
        city: string;
    }
}
export type UsersReducerInitialStateType = {
    users: Array<UserType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: Array<string>;
}
export type FollowACType = { type: 'FOLLOW', userId: string }
export type UnFollowACType = { type: 'UNFOLLOW', userId: string }
export type SetUsersACType = { type: 'SET-USERS', users: Array<UserType> }
export type SetCurrentPageACType = { type: 'SET-CURRENT-PAGE', currentPage: number }
export type SetUsersTotalCountACType = { type: 'SET-TOTAL-COUNT', totalCount: number }
export type ToggleIsFetchingACType = { type: 'TOGGLE-IS-FETCHING', isFetching: boolean }
export type toggleFollowingInProgressACType = {
    type: 'TOGGLE-FOLLOWING-IN-PROGRESS',
    isFetching: boolean, userId: string
}

export type UsersReducerAC =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetUsersTotalCountACType | ToggleIsFetchingACType | toggleFollowingInProgressACType;

let initialState: UsersReducerInitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state: UsersReducerInitialStateType = initialState, action: UsersReducerAC): UsersReducerInitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map((user: UserType) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map((user: UserType) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case 'SET-USERS' :
            return {
                ...state,
                users: action.users
            }
        case 'SET-CURRENT-PAGE' :
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET-TOTAL-COUNT' :
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case 'TOGGLE-IS-FETCHING' :
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'TOGGLE-FOLLOWING-IN-PROGRESS':
            return {
                ...state,
                followingInProgress : action.isFetching
                    ? [ ...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !==action.userId)
            }
        default :
            return state
    }
}

export const follow = (userId: string): FollowACType => {
    return {
        type: 'FOLLOW',
        userId
    }
}
export const unFollow = (userId: string): UnFollowACType => {
    return {
        type: 'UNFOLLOW',
        userId
    }
}
export const setUsers = (users: Array<UserType>): SetUsersACType => {
    return {
        type: 'SET-USERS',
        users
    }
}
export const setCurrentPage = (currentPage: number): SetCurrentPageACType => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    }
}
export const setUsersTotalCount = (totalCount: number): SetUsersTotalCountACType => {
    return {
        type: 'SET-TOTAL-COUNT',
        totalCount
    }
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingACType => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    }
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: string): toggleFollowingInProgressACType => {
    return {
        type: 'TOGGLE-FOLLOWING-IN-PROGRESS',
        isFetching,
        userId
    }
}

export default usersReducer;