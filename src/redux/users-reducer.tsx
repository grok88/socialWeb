import {AppRootState, InferActionsType} from './redux-store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AuthReducerType} from './auth-reducer';
import {dialogsReducerAC} from './dialogs-reducer';
import {NavbarReducerAC} from './navbar-reducer';
import {profileReducerType} from './profile-reducer';
import {AppReducerType} from './app-reducer';
import {updateObjectInArray} from '../utils/object-helpers';
import {UserType} from '../types/types';
import {userApi} from '../api/users-api';
import {APIResponseType} from '../api/api';


export type UsersReducerAC = InferActionsType<typeof actions>;

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
    followingInProgress: [] as Array<string>,
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

export type   UsersReducerInitialStateType = typeof initialState;
export type   UsersReducerFilterType = typeof initialState.filter;

const usersReducer = (state: UsersReducerInitialStateType = initialState, action: UsersReducerAC): UsersReducerInitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
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
        case 'SW/USERS/SET-FILTER':
            return {
                ...state,
                filter: action.payload
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
            type: 'FOLLOW',
            userId
        } as const;
    },
    unFollowSuccess: (userId: string) => {
        return {
            type: 'UNFOLLOW',
            userId
        } as const;
    },
    setUsers: (users: Array<UserType>) => {
        return {
            type: 'SET-USERS',
            users
        } as const;
    },
    setCurrentPage: (currentPage: number) => {
        return {
            type: 'SET-CURRENT-PAGE',
            currentPage
        } as const;
    },
    setFilter: (filter: UsersReducerFilterType) => {
        return {
            type: 'SW/USERS/SET-FILTER',
            payload: filter
        } as const;
    },
    setUsersTotalCount: (totalCount: number) => {
        return {
            type: 'SET-TOTAL-COUNT',
            totalCount
        } as const;
    },
    toggleIsFetching: (isFetching: boolean) => {
        return {
            type: 'TOGGLE-IS-FETCHING',
            isFetching
        } as const;
    },
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => {
        return {
            type: 'TOGGLE-FOLLOWING-IN-PROGRESS',
            isFetching,
            userId
        } as const;
    }
}


export type ThunkType = ThunkAction<void, AppRootState, unknown, SWActionType>;

export const requestUsers = (requestPage: number, pageSize: number, filter: UsersReducerFilterType): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(requestPage));
        dispatch(actions.setFilter(filter));

        const data = await userApi.getUsers(requestPage, pageSize, filter.term, filter.friend);
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setUsersTotalCount(data.totalCount));
    }
}
const followUnfollowFlow = async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>, userId: string, apiMethod: (userId: string) => Promise<APIResponseType>, actionCreator: any) => {

    dispatch(actions.toggleFollowingInProgress(true, userId));
    const data = await apiMethod(userId);

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingInProgress(false, userId));
}
export const follow = (userId: string): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        let apiMethod = userApi.follow.bind(userApi);
        await followUnfollowFlow(dispatch, userId, apiMethod, actions.followSuccess);
    }
}
export const unfollow = (userId: string): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        let apiMethod = userApi.unFollow.bind(userApi);
        await followUnfollowFlow(dispatch, userId, apiMethod, actions.unFollowSuccess);
    }
}

export default usersReducer;
