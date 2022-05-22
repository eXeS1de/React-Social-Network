import React from "react";
import css from "./Post.module.css";
import userImage from "../../../../assets/images/user-png-image.png";

const Post = (props) => {
    return (
        <div className={css.item}>
            <img src={userImage} alt="Avatar" />
            {props.message}
            <div> Like {props.likesCount}</div>
        </div>
    );
};

export default Post;
