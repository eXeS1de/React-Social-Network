import profileReducer, { addPostAC } from "./profileReducer"

it('new post should be added', () => {

   //1.Data
    let action = addPostAC('Hello World')
    let state = {
        posts: [
            {id:1, message: 'Hi', likesCount: '5'},
            {id:2, message: 'How are you', likesCount: '7'},
            {id:3, message: 'Yo Yo', likesCount: '15'}
        ]
    }

    //2.Action
    let newState = profileReducer(state, action)

    //3.Expectations
    expect(newState.posts.length).toBe(4)
})