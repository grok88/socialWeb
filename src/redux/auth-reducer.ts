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
    type: 'SET-USER-DATA',
    data: {
        id: number,
        email: string,
        login: string
    }
}
type setAuthUserACType = {
    type: 'SET-AUTH-USER',
    authUser: AuthUserType
}


type AuthReducerType = SetUserDataACType | setAuthUserACType;

const authReducer = (state: AuthReducerTypeInitialStateType = initialState, action: AuthReducerType): AuthReducerTypeInitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA' : {
            return {
                ...state,
                ...action.data,
                isAuth: true
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

export const setAuthUserData = (id: number, email: string, login: string): SetUserDataACType => {
    return {
        type: 'SET-USER-DATA',
        data: {
            id,
            email,
            login
        }
    }
}
export const setAuthUser = (authUser: AuthUserType): setAuthUserACType => {
    return {
        type: 'SET-AUTH-USER',
        authUser
    }
}