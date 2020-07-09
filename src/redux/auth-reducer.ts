export type AuthReducerTypeInitialStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth:boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}
type SetUserDataACType = {
    type: 'SET-USER-DATA',
    data: {
        id: number,
        email: string,
        login: string
    }
}

type AuthReducerType = SetUserDataACType;

const authReducer = (state: AuthReducerTypeInitialStateType = initialState, action: AuthReducerType): AuthReducerTypeInitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA' : {
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
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