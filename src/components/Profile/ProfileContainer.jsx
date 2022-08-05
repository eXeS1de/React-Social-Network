import React, { useEffect } from 'react'
import { setUserProfile, setUserStatus, updateUserStatus } from "../../redux/reducers/profileReducer"
import { connect } from 'react-redux'
import Profile from './Profile'
import { useParams } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

const ProfileContainer = (props) => {
    let { userId } = useParams()
    if (!userId) userId = 16013
    useEffect(() => {
        props.setUserProfile(userId)
        props.setUserStatus(userId)
    },[userId])

    return (
        <Profile {...props} />
    )
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userStatus: state.profilePage.userStatus
})



export default compose(
    connect(mapStateToProps, {setUserProfile, setUserStatus, updateUserStatus}),
    withAuthRedirect,
)(ProfileContainer)