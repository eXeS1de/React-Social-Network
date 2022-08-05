import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setAuthData, getAuthData } from '../../redux/reducers/authReducer';
import { logout } from "../../redux/reducers/authReducer";
import Header from './Header';

const HeaderContainer = (props) => {
    useEffect(() => {
        props.getAuthData()
    },[]);
    return (
        <Header {...props} />
    )
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setAuthData, getAuthData, logout})(HeaderContainer)