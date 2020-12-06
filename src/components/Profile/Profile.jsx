import React from 'react'
import css from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={css.content}>
            <img src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' alt='bg' />
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile