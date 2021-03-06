import {SWActionType, ThunkType} from "./users-reducer";
import {ResultCodeEnum, ResultCodeForCaptchaEnum} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppRootState, InferActionsType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {authApi} from "../api/auth-api";
import {securityApi} from "../api/security-api";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_AUTH_USER = 'auth/SET-AUTH-USER';
const GET_CAPTCHA_URL = 'auth/GET-CAPTCHA-URL';

export type AuthReducerTypeInitialStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    authUser: AuthUserType | null,
    captchaUrl: string | null
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
    authUser: null,
    captchaUrl: null
}


export type AuthReducerType = InferActionsType<typeof actions>;


const authReducer = (state: AuthReducerTypeInitialStateType = initialState, action: AuthReducerType): AuthReducerTypeInitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL : {
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

//actions
// export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
//     return {
//         type: SET_USER_DATA,
//         payload: {
//             id,
//             email,
//             login,
//             isAuth
//         }
//     } as const;
// }
// export const setAuthUser = (authUser: AuthUserType) => {
//     return {
//         type: SET_AUTH_USER,
//         authUser
//     } as const;
// }
// export const getCaptchaUrl = (captchaUrl: string) => {
//     return {
//         type: GET_CAPTCHA_URL,
//         payload: {captchaUrl}
//     } as const;
// }
// type SetUserDataACType = ReturnType<typeof setAuthUserData>;
// type SetAuthUserACType = ReturnType<typeof setAuthUser>;
// type GetCaptchaUrlACType = ReturnType<typeof getCaptchaUrl>;
// export type AuthReducerType = SetUserDataACType | SetAuthUserACType | GetCaptchaUrlACType;


const actions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
        return {
            type: SET_USER_DATA,
            payload: {
                id,
                email,
                login,
                isAuth
            }
        } as const;
    },
    setAuthUser: (authUser: AuthUserType) => {
        return {
            type: SET_AUTH_USER,
            authUser
        } as const;
    },
    getCaptchaUrl: (captchaUrl: string) => {
        return {
            type: GET_CAPTCHA_URL,
            payload: {captchaUrl}
        } as const;
    }
}
//thunk
export const authMe = (): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        const meData = await authApi.authMe();

        if (meData.resultCode === ResultCodeEnum.Success) {
            let {id, email, login} = meData.data;
            dispatch(actions.setAuthUserData(id, email, login, true));
            // const userRes = await userApi.getUserProfileById(id);
            // dispatch(setAuthUser(userRes.data));
        }
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType | ReturnType<typeof stopSubmit >>) => {
        const data = await authApi.login(email, password, rememberMe, captcha);

        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(authMe());
        } else {
            if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
                dispatch(getCaptcha());
            }
            const message = data.messages.length > 0 ? data.messages[0] : 'some error occurred';
            dispatch(stopSubmit('login', {_error: message}));
        }

    }
}
export const logout = (): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        const data = await authApi.logout();

        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(actions.setAuthUserData(null, null, null, false));
        }
    }
}

export const getCaptcha = (): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        try {
            const res = await securityApi.getCaptcha();
            dispatch(actions.getCaptchaUrl(res.url));
        } catch (e) {
            console.log(e.name)
        }
    }
}
