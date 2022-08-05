import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import css from './Profile.module.css'

const Profile = (props) => {
    return (
        <div>
            <div>
                {props.profile?.photos?.large ? <img src={props.profile.photos.large} alt='avatar' /> : null}
            </div>
            <div className={css.status}>
                <ProfileStatus {...props} />
            </div>
            <MyPostsContainer />
        </div>
    )
}

export default Profile