import axios from "axios";
import {ProfileDataFormType} from "../components/profile/profileInfo/ProfileDataForm/ProfileDataForm";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "api-key": "d957613d-94bb-4388-aef0-47e775e83ac5"
    }
})

export const userApi = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(id: string) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data);
    },
    unFollow(id: string) {
        return instance.delete(`follow/${id}`)
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
    updateStatus(status: string) {
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
    saveProfile(profile: ProfileDataFormType) {
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

export const authApi = {
    authMe() {
        return instance.get('auth/me')
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string | null = null) {
        return instance.post('auth/login', {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete('auth/login');
    }
}

export const securityApi = {
    getCaptcha() {
        return instance.get<{ url: string }>('security/get-captcha-url')
    },
}