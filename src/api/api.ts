import axios from "axios";
import {ProfileDataFormType} from "../components/profile/profileInfo/ProfileDataForm/ProfileDataForm";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "api-key": "d957613d-94bb-4388-aef0-47e775e83ac5"

    }
})



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

// export type ResponseType<T> = {
//     data: T
//     fieldErrors: string[]
//     messages: string[]
//     resultCode: number
// }

type MeRespType = {
    data: {
        id: number;
        email: string;
        login: string;
    },
    resultCode: ResultCodeEnum;
    messages: Array<string>;
}

export type CommonRespType = {
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

export const securityApi = {
    getCaptcha() {
        return instance.get<{ url: string }>('security/get-captcha-url')
    },
}
export type ResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    messages: Array<string>;
    resultCode: RC
}
