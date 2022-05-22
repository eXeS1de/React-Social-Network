import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <NavLink to="/profile" className={({ isActive }) => isActive ? css.active : undefined}>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/dialogs" className={({ isActive }) => isActive ? css.active : undefined}>Dialogs</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/news" className={({ isActive }) => isActive ? css.active : undefined}>News</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/music" className={({ isActive }) => isActive ? css.active : undefined}>Music</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/settings" className={({ isActive }) => isActive ? css.active : undefined}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
