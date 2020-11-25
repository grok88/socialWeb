import {AppRootState, InferActionsType} from "./redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AuthReducerType} from "./auth-reducer";
import {dialogsReducerAC} from "./dialogs-reducer";
import {NavbarReducerAC} from "./navbar-reducer";
import {profileReducerType} from "./profile-reducer";
import {AppReducerType} from "./app-reducer";
import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "../types/types";
import {userApi} from "../api/users-api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS';

// export type UserType = {
//     id: string;
//     userUrl: string;
//     photos: {
//         small: string | null;
//         large: string | null;
//     }
//     followed: boolean;
//     name: string;
//     status: string;
//     location: {
//         country: string;
//         city: string;
//     }
// }
// export type UsersReducerInitialStateType = {
//     users: Array<UserType>;
//     pageSize: number;
//     totalUsersCount: number;
//     currentPage: number;
//     isFetching: boolean;
//     followingInProgress: Array<string>;
// }


// export type FollowACType = ReturnType<typeof followSuccess>;
// export type UnFollowACType = ReturnType<typeof unFollowSuccess>;
// export type SetUsersACType = ReturnType<typeof setUsers>;
// export type SetCurrentPageACType = ReturnType<typeof setCurrentPage>;
// export type SetUsersTotalCountACType = ReturnType<typeof setUsersTotalCount>;
// export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>;
// export type toggleFollowingInProgressACType = ReturnType<typeof toggleFollowingInProgress>;

export type UsersReducerAC = InferActionsType<typeof actions>;
// FollowACType
// | UnFollowACType
// | SetUsersACType
// | SetCurrentPageACType
// | SetUsersTotalCountACType | ToggleIsFetchingACType | toggleFollowingInProgressACType;

export type SWActionType =
    AuthReducerType
    | dialogsReducerAC
    | NavbarReducerAC
    | profileReducerType
    | UsersReducerAC
    | AppReducerType;

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<string>
}

export type   UsersReducerInitialStateType = typeof initialState;

const usersReducer = (state: UsersReducerInitialStateType = initialState, action: UsersReducerAC): UsersReducerInitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS :
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE :
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT :
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING :
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default :
            return state
    }
}
export const actions = {
    followSuccess: (userId: string) => {
        return {
            type: FOLLOW,
            userId
        } as const;
    },
    unFollowSuccess: (userId: string) => {
        return {
            type: UNFOLLOW,
            userId
        } as const;
    },
    setUsers: (users: Array<UserType>) => {
        return {
            type: SET_USERS,
            users
        } as const;
    },
    setCurrentPage: (currentPage: number) => {
        return {
            type: SET_CURRENT_PAGE,
            currentPage
        } as const;
    },
    setUsersTotalCount: (totalCount: number) => {
        return {
            type: SET_TOTAL_COUNT,
            totalCount
        } as const;
    },
    toggleIsFetching: (isFetching: boolean) => {
        return {
            type: TOGGLE_IS_FETCHING,
            isFetching
        } as const;
    },
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => {
        return {
            type: TOGGLE_FOLLOWING_IN_PROGRESS,
            isFetching,
            userId
        } as const;
    }
}

/*
export const followSuccess = (userId: string) => {
    return {
        type: FOLLOW,
        userId
    } as const;
}
export const unFollowSuccess = (userId: string) => {
    return {
        type: UNFOLLOW,
        userId
    } as const;
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const;
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const;
}
export const setUsersTotalCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    } as const;
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const;
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: string) => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        isFetching,
        userId
    } as const;
}*/


export type ThunkType = ThunkAction<void, AppRootState, unknown, SWActionType>;

export const requestUsers = (requestPage: number, pageSize: number): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(requestPage));

        const data = await userApi.getUsers(requestPage, pageSize);
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setUsersTotalCount(data.totalCount));
    }
}
const followUnfollowFlow = async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>, userId: string, apiMethod: any, actionCreator: any) => {

    dispatch(actions.toggleFollowingInProgress(true, userId));
    const data = await apiMethod(userId);
    dispatch(actions.toggleFollowingInProgress(false, userId));
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
}
export const follow = (userId: string): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        let apiMethod = userApi.follow.bind(userApi);
        followUnfollowFlow(dispatch, userId, apiMethod, actions.followSuccess);
    }
}
export const unfollow = (userId: string): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        let apiMethod = userApi.unFollow.bind(userApi);
        followUnfollowFlow(dispatch, userId, apiMethod, actions.unFollowSuccess);
    }
}

export default usersReducer;
