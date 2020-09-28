import {SWActionType, ThunkType} from "./users-reducer";
import {authApi, userApi} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppRootState} from "./redux-store";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_AUTH_USER = 'auth/SET-AUTH-USER';

export type AuthReducerTypeInitialStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    authUser: AuthUserType | null
}

export type AuthUserType = {
    aboutMe: string,
    contacts: {
        [key: string]: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    authUser: null
}
type SetUserDataACType = ReturnType<typeof setAuthUserData>;
type SetAuthUserACType = ReturnType<typeof setAuthUser>;


export type AuthReducerType = SetUserDataACType | SetAuthUserACType;

const authReducer = (state: AuthReducerTypeInitialStateType = initialState, action: AuthReducerType): AuthReducerTypeInitialStateType => {
    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_AUTH_USER:
            return {
                ...state,
                authUser: action.authUser
            }
        default:
            return state;
    }
}

export default authReducer;

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const;
}
export const setAuthUser = (authUser: AuthUserType) => {
    return {
        type: SET_AUTH_USER,
        authUser
    } as const;
}

export const authMe = (): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        const res = await authApi.authMe();

        if (res.data.resultCode === 0) {
            let {id, email, login} = res.data.data;
            dispatch(setAuthUserData(id, email, login, true));
            const userRes = await userApi.getUserProfileById(id);
            dispatch(setAuthUser(userRes.data));
        }
    }
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        const res = await authApi.login(email, password, rememberMe);

        if (res.data.resultCode === 0) {
            dispatch(authMe());
        } else {
            const message = res.data.messages.length > 0 ? res.data.messages[0] : 'some error occurred';
            // @ts-ignore
            dispatch(stopSubmit('login', {_error: message}));
        }

    }
}
export const logout = (): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        const res = await authApi.logout();

        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}