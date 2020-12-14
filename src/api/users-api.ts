import {APIResponseType, instance} from './api';
import {UserType} from "../types/types";

export type GetUsersRespType = {
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
        return instance.post<APIResponseType>(`follow/${id}`, {})
            .then(response => response.data);
    },
    unFollow(id: string) {
        return instance.delete<APIResponseType>(`follow/${id}`)
            .then(response => response.data);
    },
}
