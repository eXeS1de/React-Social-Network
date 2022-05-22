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
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessageText
            return state;
        default:
            return state;
    }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE})
export const updateNewMessageAC = (text) => ({type: UPDATE_NEW_MESSAGE, newMessageText: text})

export default dialogsReducer