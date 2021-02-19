import {v1} from "uuid";
import {ProfileType} from "../components/profile/profileInfo/profileInfo";
import {AppRootState, InferActionsType} from "./redux-store";
import {SWActionType, ThunkType} from "./users-reducer";
import {ThunkDispatch} from "redux-thunk";
import {ProfileDataFormType} from "../components/profile/profileInfo/ProfileDataForm/ProfileDataForm";
import {stopSubmit} from "redux-form";
import {ObjPostType} from "../types/types";
import {profileApi} from "../api/profile-api";

export type profileReducerType = InferActionsType<typeof actions>

export type ProfileReducerInitialStateType = typeof InitialState;

let InitialState = {
    posts: [
        {id: v1(), message: 'Hello, What are you doing?', likeCount: '5'},
        {id: v1(), message: 'Hi, I am learning TypeScript now.', likeCount: '13'},
    ] as Array<ObjPostType>,
    profile: null as ProfileType | null,
    status: ''
}

const profileReducer = (state: ProfileReducerInitialStateType = InitialState, action: profileReducerType): ProfileReducerInitialStateType => {
    switch (action.type) {
        case "profile/ADD-POST" :
            let stateCopy = {
                ...state,
                posts: [...state.posts],

            }
            const newPost: ObjPostType = {
                id: v1(),
                message: action.value,
                likeCount: "0"
            }
            stateCopy.posts.push(newPost);
            return stateCopy;
        case "profile/DELETE-POST":
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
            }
        case "profile/SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "profile/SET-USER-STATUS":
            return {
                ...state,
                status: action.status
            }
        case "profile/SET-PHOTO-SUCCESS":
            return {
                ...state,
                profile: action.profile
            }

        default :
            return state;
    }
}

// actions
export const actions = {
    addPostAC: (value: string) => {
        return {
            type: 'profile/ADD-POST',
            value
        } as const;
    },
    deleteAC: (postId: string) => {
        return {
            type: 'profile/DELETE-POST',
            postId
        } as const;
    },
    setUserProfile: (profile: ProfileType) => {
        return {
            type: 'profile/SET-USER-PROFILE',
            profile
        } as const;
    },
    setUserStatus: (status: string) => {
        return {
            type: 'profile/SET-USER-STATUS',
            status
        } as const;
    },
    savePhotoSuccess: (profile: ProfileType) => {
        return {
            type: 'profile/SET-PHOTO-SUCCESS',
            profile
        } as const;
    }
}


//thunk
export const getUserProfile = (userId: string): ThunkType => async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
    const res = await profileApi.getUserProfileById(userId);
    dispatch(actions.setUserProfile(res));
}
export const getUserStatus = (userID: string): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        const resp = await profileApi.getStatus(userID);
        dispatch(actions.setUserStatus(resp));
    }
}
export const updateUserStatus = (status: string): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        try {
            const resp = await profileApi.updateStatus(status);
            if (resp.resultCode === 0) {
                dispatch(actions.setUserStatus(status));
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const savePhoto = (file: File): ThunkType => {
    return async (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>, getState: () => AppRootState) => {
        try {
            const resp = await profileApi.savePhoto(file);
            if (resp.resultCode === 0) {
                const profile = getState().profilePage.profile
                profile && dispatch(actions.savePhotoSuccess({...profile, photos: resp.data.photos}));
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
