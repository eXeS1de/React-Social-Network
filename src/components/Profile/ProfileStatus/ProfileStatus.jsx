import React, { useState } from 'react';

const ProfileStatus = (props) => {
    
    const [isEditMode, setIsEditMode] = useState(false)
    const [userStatus, setUserStatus] = useState(props.userStatus)

    const activateEditMode = () => {setIsEditMode(true)}
    const deactivateEditMode = () => {
        setIsEditMode(false)
        props.updateUserStatus(userStatus)
    }

    const onStatusChange = (e) => {
        setUserStatus(e.currentTarget.value)
    }

    return (
        <div>
            {
                isEditMode 
                ? <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={userStatus}/>
                : <span onDoubleClick={activateEditMode}>{props.userStatus}</span>
            }
        </div>
    )
}

export default ProfileStatus