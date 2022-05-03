import { usersAPI } from '../API/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const LOADING_IN_PROGRESS = 'LOADING_IN_PROGRESS';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isLoading: true,
	isFollowing: []
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(el => {
					if (el.id === action.userId) {
						return { ...el, followed: true }
					}
					return el;
				})
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(el => {
					if (el.id === action.userId) {
						return { ...el, followed: false }
					}
					return el;
				})
			};
		case SET_USERS:
			return {
				...state,
				users: action.users
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			};
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalUsersCount
			};
		case LOADING_IN_PROGRESS:
			return {
				...state,
				isLoading: action.isLoading
			};
		case FOLLOWING_IN_PROGRESS:
			return {
				...state,
				isFollowing: action.isFollowing
					? [...state.isFollowing, action.userId]
					: state.isFollowing.filter(id => id != action.userId)
			};
		default:
			return state;
	}
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const loadingInProgress = (isLoading) => ({ type: LOADING_IN_PROGRESS, isLoading });
export const followingInProgress = (isFollowing, userId) => ({ type: FOLLOWING_IN_PROGRESS, isFollowing, userId });

export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(loadingInProgress(true));
		usersAPI.getUsers(currentPage, pageSize).then(data => {
			dispatch(loadingInProgress(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
		});
	}
}

export const follow = (userId) => {
	return (dispatch) => {
		dispatch(followingInProgress(true, userId));
		usersAPI.followUser(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(followSuccess(userId));
			}
			dispatch(followingInProgress(false, userId));
		})
	}
}

export const unfollow = (userId) => {
	return (dispatch) => {
		dispatch(followingInProgress(true, userId));
		usersAPI.unfollowUser(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(unfollowSuccess(userId));
			}
			dispatch(followingInProgress(false, userId));
		})
	}
}

export default usersReducer;
