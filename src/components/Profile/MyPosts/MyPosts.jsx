import React from 'react'
import css from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                New Post
            </div>
            <div>
                Posts
                <div className={css.item}>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>    
    )
}

export default MyPosts

