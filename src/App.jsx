import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initilizedApp } from './redux/reducers/appReducer'
import Preloader from './components/common/Preloader';

const App = (props) => {
    useEffect(() => {
        props.initilizedApp()
    },[])

    if(!props.initialized) {
        return <Preloader />
    }
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element={ <ProfileContainer /> }>
                            <Route path=':userId' element={ <ProfileContainer /> } />
                        </Route>
                        <Route path='/dialogs/*' element={ <DialogsContainer /> } />
                        <Route path='/users/*' element={ <UsersContainer /> } />
                        <Route path='/login' element={ <Login /> } />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps,{initilizedApp})(App);