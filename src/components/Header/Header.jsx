import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css'

const Header = (props) => {
    console.log(props);
    return (
        <header className={css.header}>
            <img src='https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg' alt='logo' />
            <span>
                {props.isAuth 
                    ? <div className={css.login_wrapper}>
                        <div className={css.login}>{props.login}</div>                        
                        <button className={css.logout} onClick={props.logout}>Logout</button>
                      </div>
                    : <NavLink to='/login' className={css.login_link}>Login</NavLink> }
            </span>
        </header>
    )
}

export default Header