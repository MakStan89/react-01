import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: { 'API-KEY': 'b5b308e5-22b5-4a19-861f-1b5559e6a637' }
})

export const usersAPI = {
	getUsers(currentPage, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);
	},
	getProfile(userId) {
		console.warn('Old method.');
		return profileAPI.getProfile(userId);
	},
	unfollowUser(userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => response.data);
	},
	followUser(userId) {
		return instance.post(`follow/${userId}`)
			.then(response => response.data);
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`)
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`)
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status })
	},
}

export const authAPI = {
	getAuth() {
		return instance.get(`auth/me`)
			.then(response => response.data);
	}
}
