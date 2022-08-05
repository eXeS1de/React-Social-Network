import React from "react";
import preloader from '../../assets/preloader.svg';
import css from './Preloader.module.css'

const Preloader = (props) => {
    return <div className={css.preloader}><img alt="preloader" src={preloader}/></div>
}

export default Preloader;