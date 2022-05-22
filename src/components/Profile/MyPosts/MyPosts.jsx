import React from "react";
import { addPostAC, updateNewPostAC } from "../../../redux/reducers/profileReducer";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = 
        props.state.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

    let newPost = React.createRef();

    let addPost = () => {
        props.dispatch(addPostAC());
    }
    
    let onPostChange = () => {
        let postText = newPost.current.value;
        let action = updateNewPostAC(postText);
        props.dispatch(action);
    }

    return (
        <div>
            My Posts
            <div>
                <textarea onChange={onPostChange} ref={newPost}
                    value={props.state.newPostText}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={css.posts}>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;