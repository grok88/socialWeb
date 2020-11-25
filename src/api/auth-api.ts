import {instance, APIResponseType, ResultCodeEnum, ResultCodeForCaptchaEnum} from "./api";

type LoginRespDataType = {
    userId: number;
}
type MeRespDataType = {
    id: number
    email: string
    login: string
}
export const authApi = {
    authMe() {
        return instance.get<APIResponseType<MeRespDataType>>('auth/me').then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string | null = null) {
        return instance.post<APIResponseType<LoginRespDataType, ResultCodeEnum | ResultCodeForCaptchaEnum>>('auth/login', {
            email,
            password,
            rememberMe,
            captcha
        })
            .then(res => res.data);
    },
    logout() {
        return instance.delete<APIResponseType>('auth/login')
            .then(res => res.data);
    }
}
