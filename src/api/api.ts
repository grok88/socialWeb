import axios from "axios";
import {ProfileDataFormType} from "../components/profile/profileInfo/ProfileDataForm/ProfileDataForm";
import {UserType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "api-key": "d957613d-94bb-4388-aef0-47e775e83atyjc5"
    }
})

type GetUsersRespType = {
    items: Array<UserType>;
    totalCount: number;
    error: string;
}

export const userApi = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetUsersRespType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(id: string) {
        return instance.post<CommonRespType>(`follow/${id}`, {})
            .then(response => response.data);
    },
    unFollow(id: string) {
        return instance.delete<CommonRespType>(`follow/${id}`)
            .then(response => response.data);
    },
    getUserProfileById(id: string) {
        console.warn('Obsolete method. Use profileApi object');
        return profileApi.getUserProfileById(id);
    }
}
export const profileApi = {
    getUserProfileById(id: string) {
        return instance.get(`profile/${id}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus<CommonRespType>(status: string) {
        return instance.put(`profile/status`, {status});
    },
    savePhoto(photo: any) {
        let formData = new FormData();
        formData.append('image', photo)
        return instance.put<ResponseType<{ photos: { small: string, large: string } }>>(`profile/photo`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(res => res.data);
    },
    saveProfile<CommonRespType>(profile: ProfileDataFormType) {
        return instance.put('profile', profile)
            .then(res => res.data);
    }
}

export type ResponseType<T> = {
    data: T
    fieldErrors: string[]
    messages: string[]
    resultCode: number
}

type MeRespType = {
    data: {
        id: number;
        email: string;
        login: string;
    },
    resultCode: ResultCodeEnum;
    messages: Array<string>;
}
type LoginRespType = {
    data: {
        userId: number;
    },
    resultCode: ResultCodeEnum | ResultCodeForCaptcha;
    messages: Array<string>;
}
type CommonRespType = {
    data: {},
    resultCode: ResultCodeEnum;
    messages: Array<string>;
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

export const authApi = {
    authMe() {
        return instance.get('auth/me').then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string | null = null) {
        return instance.post<LoginRespType>('auth/login', {email, password, rememberMe, captcha})
            .then(res => res.data);
    },
    logout() {
        return instance.delete<CommonRespType>('auth/login')
            .then(res => res.data);
    }
}

export const securityApi = {
    getCaptcha() {
        return instance.get<{ url: string }>('security/get-captcha-url')
    },
}