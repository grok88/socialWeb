import {AppRootState} from "./redux-store";

export const getIsAuth = (state: AppRootState) => {
    return state.auth.isAuth;
}
export const getLogin = (state: AppRootState) => {
    return state.auth.login;
}
export const getAuthUser = (state: AppRootState) => {
    return state.auth.authUser;
}

