import React from "react";
import { Field, Form, Formik } from "formik";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id} /> )

    const addPost = (newPost) => {
        props.addPost(newPost)
    }

    return (
        <div>
            <div className={css.description}>
                My Posts
            </div>
            <AddPostForm onSubmit={addPost}/>
            <div className={css.posts}>
                {posts}
            </div>
        </div>
    );
};

const AddPostForm = (props) => {
    return (
        <Formik
            initialValues={{ post: '' }}
            onSubmit={(values, { setSubmitting }) => {
                props.onSubmit(values.post)
                values.post = ''
                setSubmitting(false)
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <Field type="text" name="post" as="textarea" placeholder="Add Your Post" />
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting}>
                            Add Post
                        </button>
                    </div>                    
                </Form>
            )}
        </Formik>
    )
}

export default MyPosts;