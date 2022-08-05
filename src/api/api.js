import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '10cba51f-eaaa-42d5-90d2-ec9a4beeba18'
    }
})

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const getUsersAPI = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const getProfileAPI = (userId) => {
    return instance.get(`profile/${userId}`)
        .then(response => response.data)
}

export const followAPI = (userId) => {
    return instance.post(`follow/${userId}`)
        .then(response => response.data)
}

export const unfollowAPI = (userId) => {
    return instance.delete(`follow/${userId}`)
        .then(response => response.data)
}

export const getStatusAPI = (userId) => {
    return instance.get(`profile/status/${userId}`)
        .then(response => response.data)
}

export const updateStatusAPI = (status) => {
    return instance.put(`profile/status`, {status})
}