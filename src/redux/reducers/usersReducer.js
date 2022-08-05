import { followAPI, getUsersAPI, unfollowAPI } from "../../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

const initialState = {
    users : [],
    pageSize : 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    currentFollowedUser: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS: 
            return {
                ...state, 
                users: [...action.users]
            }
        case SET_USERS_COUNT:
            return {
                ...state, 
                totalUsersCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                currentFollowedUser: action.isFetching 
                    ? [...state.currentFollowedUser, action.userId] 
                    : state.currentFollowedUser.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

// ACTIONS
export const follow = (userId) => ({type:FOLLOW, id:userId})
export const unfollow = (userId) => ({type:UNFOLLOW, id:userId})
export const setUsers = (users) => ({type:SET_USERS, users})
export const setUsersCount = (totalCount) => ({type:SET_USERS_COUNT, totalCount})
export const setCurrentPage = (page) => ({type:SET_CURRENT_PAGE, page})
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})
export const toggleCurrentFollowedUsers = (isFetching, userId) => ({type:TOGGLE_FOLLOWING_PROGRESS, isFetching, userId})

// THUNKS
export const getUsers = (currentPage, pageSize) => {
    return dispatch => {
        dispatch(toggleIsFetching(true));
        getUsersAPI(currentPage, pageSize)
            .then(data => {
                dispatch(setUsersCount(data.totalCount))
                dispatch(setUsers(data.items))
                dispatch(toggleIsFetching(false))
        })
    }
}

export const followThunk = (userId) => {
    return dispatch  => {
        dispatch(toggleCurrentFollowedUsers(true, userId));
        followAPI(userId)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(follow(userId))
                    dispatch(toggleCurrentFollowedUsers(false, userId));
                }
            })
    }
}

export const unfollowThunk = (userId) => {
    return dispatch => {
        dispatch(toggleCurrentFollowedUsers(true, userId));
        unfollowAPI(userId)
            .then(data => {
                if(data.resultCode === 0) { 
                    dispatch(unfollow(userId))
                    dispatch(toggleCurrentFollowedUsers(false, userId));
                }
            })
    }
} 
export default usersReducer