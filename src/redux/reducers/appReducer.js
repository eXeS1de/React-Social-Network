import { getAuthData } from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

// ACTIONS
export const initilizedSuccess = () => ({type: INITIALIZED_SUCCESS})

// THUNKS
export const initilizedApp = () => dispatch => {
    let promise = dispatch(getAuthData())

    Promise.all([promise]).then(() => {
        dispatch(initilizedSuccess())
    })    
}

export default appReducer