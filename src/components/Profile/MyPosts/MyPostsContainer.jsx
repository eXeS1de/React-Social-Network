import { connect } from "react-redux";
import { addPostAC, updateNewPostAC } from "../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts"

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPost: (e) => {
            dispatch(updateNewPostAC(e.currentTarget.value));
        },
        addPost: (newPost) => {
            dispatch(addPostAC(newPost));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;