import {ProfileDataFormType} from "../components/profile/profileInfo/ProfileDataForm/ProfileDataForm";
import {APIResponseType, instance} from "./api";

import {ProfileType} from "../components/profile/profileInfo/profileInfo";

export const profileApi = {
    getUserProfileById(id: string) {
        return instance.get<ProfileType>(`profile/${id}`).then(res => res.data)
    },
    getStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data);
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status`, {status}).then(res => res.data);
    },
    savePhoto(photo: File) {
        let formData = new FormData();
        formData.append('image', photo)
        return instance.put<APIResponseType<{ photos: { small: string, large: string } }>>(`profile/photo`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(res => res.data);
    },
    saveProfile(profile: ProfileDataFormType) {
        return instance.put<APIResponseType>('profile', profile)
            .then(res => res.data);
    }
}
