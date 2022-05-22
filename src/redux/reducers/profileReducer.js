const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

let initialState = {
    posts: [
        {id:1, message: 'Hi', likesCount: '5'},
        {id:2, message: 'How are you', likesCount: '7'},
        {id:3, message: 'Yo Yo', likesCount: '15'}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostAC = (postText) => ({type: UPDATE_NEW_POST, newPostText: postText})

export default profileReducer