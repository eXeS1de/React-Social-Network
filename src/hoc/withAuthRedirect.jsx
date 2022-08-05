import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export const withAuthRedirect = (Component) => {

    let AuthRedirect = (props) => {
            if(!props.isAuth) return <Navigate to='/login' />
            return <Component {...props} />
        }

    return connect(mapStateToProps,{})(AuthRedirect)

}