import React from 'react'
import css from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <ul>
                <li>Profile</li>
                <li>Message</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </nav>
    )
}

export default Navbar
