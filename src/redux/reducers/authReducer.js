import { authAPI } from "../../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    //debugger
    switch(action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        default:
            return state;
    }
}

// ACTIONS
export const setAuthData = (data, isAuth) => ({type: SET_AUTH_DATA, data, isAuth})

// THUNKS
export const getAuthData = () => dispatch => {
    return authAPI.me()
        .then( data => {
            if (data.resultCode === 0) {
                let isAuth = true
                dispatch(setAuthData(data.data, isAuth))
            }
    })
}

export const login = (email, password, rememberMe, setStatus) => dispatch => {
    authAPI.login(email, password, rememberMe)
        .then( data => {
            if (data.resultCode === 0) dispatch(getAuthData())
            else setStatus({error: data.messages})
    })
}

export const logout = () => dispatch => {
    authAPI.logout()
        .then( data => {
            let authData = { email:null, id: null, login:null }
            if (data.resultCode === 0) dispatch(setAuthData(authData, false))
    })
}

export default authReducer