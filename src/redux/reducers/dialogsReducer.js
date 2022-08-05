const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';

let initialState = {
    dialogs: [
        {id: '1', name: 'Temych'},
        {id: '2', name: 'Dimych'},
        {id: '3', name: 'Andrey'},
        {id: '4', name: 'Sveta'},
        {id: '5', name: 'Victoria'}
    ],
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you'},
        {id: '3', message: 'Yo'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: action.message}],
            }
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        default:
            return state;
    }
}

export const sendMessageAC = (message) => ({type: SEND_MESSAGE, message})
export const updateNewMessageAC = (text) => ({type: UPDATE_NEW_MESSAGE, newMessageText: text})


export default dialogsReducer