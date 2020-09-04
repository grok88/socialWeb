import {SWActionType, ThunkType} from "./users-reducer";
import {authApi, userApi} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppRootState} from "./redux-store";
import {stopSubmit} from "redux-form";

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
type SetUserDataACType = {
    type: 'SET-USER-DATA';
    payload: {
        id: number | null;
        email: string | null;
        login: string | null;
        isAuth: boolean;
    }
}
type SetAuthUserACType = {
    type: 'SET-AUTH-USER';
    authUser: AuthUserType;
}


export type AuthReducerType = SetUserDataACType | SetAuthUserACType;

const authReducer = (state: AuthReducerTypeInitialStateType = initialState, action: AuthReducerType): AuthReducerTypeInitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA' : {
            return {
                ...state,
                ...action.payload
            }
        }
        case 'SET-AUTH-USER':
            return {
                ...state,
                authUser: action.authUser
            }
        default:
            return state;
    }
}

export default authReducer;

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataACType => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            id,
            email,
            login,
            isAuth
        }
    }
}
export const setAuthUser = (authUser: AuthUserType): SetAuthUserACType => {
    return {
        type: 'SET-AUTH-USER',
        authUser
    }
}

export const authMe = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        authApi.authMe()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                    userApi.getUserProfileById(id)
                        .then(res => {
                                dispatch(setAuthUser(res.data));
                            }
                        )
                }
            });
    }
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        authApi.login(email, password, rememberMe)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(authMe());
                } else {
                    const message = res.data.messages.length > 0 ? res.data.messages[0] : 'some error occurred';
                    // @ts-ignore
                    dispatch(stopSubmit('login',{_error:message}));
                }
            })
    }
}
export const logout = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        authApi.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null,false));
                }
            })
    }
}