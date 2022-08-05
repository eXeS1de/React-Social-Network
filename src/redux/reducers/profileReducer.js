import { getProfileAPI, getStatusAPI, updateStatusAPI } from "../../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        {id:1, message: 'Hi', likesCount: '5'},
        {id:2, message: 'How are you', likesCount: '7'},
        {id:3, message: 'Yo Yo', likesCount: '15'}
    ],
    newPostText: '',
    profile: null,
    userStatus: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPost,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case UPDATE_NEW_POST:
            return {
                ...state,
                newPostText: action.newPostText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profileData
            }
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.userStatus
            }
        default:
            return state;
    }
}

// ACTIONS
export const addPostAC = (newPost) => ({type: ADD_POST, newPost})
export const updateNewPostAC = (postText) => ({type: UPDATE_NEW_POST, newPostText: postText})
export const setUserProfileAC = (profileData) => ({type: SET_USER_PROFILE, profileData})
export const setUserStatusAC = (userStatus) => ({type: SET_USER_STATUS, userStatus})

// THUNKS
export const setUserProfile = (userId) => {
    return dispatch => {
        getProfileAPI(userId)
            .then( profileData => dispatch(setUserProfileAC(profileData)))
    } 
}
export const setUserStatus = (userId) => { 
    return dispatch => {
        getStatusAPI(userId)
            .then( status => dispatch(setUserStatusAC(status)))
    }
}

export const updateUserStatus = (status) => { 
    return dispatch => {
        updateStatusAPI(status)
            .then( response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatusAC(status))
                }
            })
    }
}

export default profileReducer