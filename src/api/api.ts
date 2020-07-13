import axios from "axios";

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
    }
}