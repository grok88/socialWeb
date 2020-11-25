import {v1} from "uuid";
import {ProfileType} from "../components/profile/profileInfo/profileInfo";
import {AppRootState} from "./redux-store";
import {SWActionType, ThunkType} from "./users-reducer";
import {ThunkDispatch} from "redux-thunk";
import {profileApi} from "../api/api";
import {ProfileDataFormType} from "../components/profile/profileInfo/ProfileDataForm/ProfileDataForm";
import {stopSubmit} from "redux-form";
import { ObjPostType } from "../types/types";
import {userApi} from "../api/users-api";

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'profile/SET-USER-STATUS';
const SET_PHOTO_SUCCESS = 'profile/SET-PHOTO-SUCCESS';

// TS profileReducer
export type AddPostACType = ReturnType<typeof addPostAC>;
export type DeletePostACType = ReturnType<typeof deleteAC>;
export type SetUserProfileType = ReturnType<typeof setUserProfile>;
export type SetUserStatusType = ReturnType<typeof setUserStatus>;
export type SavePhotoSuccessType = ReturnType<typeof savePhotoSuccess>;

export type profileReducerType =
    AddPostACType
    | SetUserProfileType
    | SetUserStatusType
    | DeletePostACType
    | SavePhotoSuccessType;

export type ProfileReducerInitialStateType = {
    posts: Array<ObjPostType>;
    profile: ProfileType | null;
    status: string;
}

let InitialState: ProfileReducerInitialStateType = {
    posts: [
        {id: v1(), message: 'Hello, What are you doing?', likeCount: '5'},
        {id: v1(), message: 'Hi, I am learning TypeScript now.', likeCount: '13'},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state: ProfileReducerInitialStateType = InitialState, action: profileReducerType): ProfileReducerInitialStateType => {
    switch (action.type) {
        case ADD_POST :
            let stateCopy = {
                ...state,
                posts: [...state.posts]
            }
            const newPost: ObjPostType = {
                id: v1(),
                message: action.value,
                likeCount: "0"
            }
            stateCopy.posts.push(newPost);
            return stateCopy;
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PHOTO_SUCCESS:
            return {
                ...state,
                profile: action.profile
            }

        default :
            return state;
    }
}

export const addPostAC = (value: string) => {
    return {
        type: ADD_POST,
        value
    } as const;
}
export const deleteAC = (postId: string) => {
    return {
        type: DELETE_POST,
        postId
    } as const;
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const;
}
export const setUserStatus = (status: string) => {
    return {
        type: SET_USER_STATUS,
        status
    } as const;
}
export const savePhotoSuccess = (profile: ProfileType) => {
    return {
        type: SET_PHOTO_SUCCESS,
        profile
    } as const;
}

//thunk
export const getUserProfile = (userId: string): ThunkType => async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
    const res = await profileApi.getUserProfileById(userId);
        // userApi.getUserProfileById(userId);
    dispatch(setUserProfile(res.data));
}
export const getUserStatus = (userID: string): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        const resp = await profileApi.getStatus(userID);
        dispatch(setUserStatus(resp.data));
    }
}
export const updateUserStatus = (status: string): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        try {
            const resp = await profileApi.updateStatus(status);
            if (resp.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        } catch (error) {
            debugger
            console.log(error)
        }
    }
}
export const savePhoto = (file: any): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>, getState: () => AppRootState) => {
        try {
            const resp = await profileApi.savePhoto(file);
            if (resp.resultCode === 0) {
                const profile = getState().profilePage.profile
                profile && dispatch(savePhotoSuccess({...profile, photos: resp.data.photos}));
            }
        } catch (e) {
            console.log(e.name);
        }
    }
}
export const saveProfile = (profile: ProfileDataFormType): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>, getState: () => AppRootState) => {

        const userId = String(getState().auth.id);
        try {
            const resp = await profileApi.saveProfile(profile);
            if (resp.resultCode === 0) {
                dispatch(getUserProfile(userId));
            } else {
                dispatch(stopSubmit('edit-profile', {_error: resp.messages[0]}));
                return Promise.reject(resp.messages[0]);
            }
        } catch (e) {
            console.log(e.name);
        }
    }
}

export default profileReducer;
