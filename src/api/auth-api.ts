import {instance, ResponseType, ResultCodeEnum, ResultCodeForCaptcha} from "./api";

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
        return instance.get<ResponseType<MeRespDataType>>('auth/me').then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string | null = null) {
        return instance.post<ResponseType<LoginRespDataType, ResultCodeEnum | ResultCodeForCaptcha>>('auth/login', {
            email,
            password,
            rememberMe,
            captcha
        })
            .then(res => res.data);
    },
    logout() {
        return instance.delete<ResponseType>('auth/login')
            .then(res => res.data);
    }
}
