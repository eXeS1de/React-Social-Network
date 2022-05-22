import React from "react";
import { NavLink } from "react-router-dom";
import {sendMessageAC, updateNewMessageAC } from "../../redux/reducers/dialogsReducer";
import css from "./Dialogs.module.css";

const DialogItem = (props) => {
    
    let path = `/dialogs/${props.id}`

    return (
        <div className={css.dialog}>
            <NavLink to={path} className={({ isActive }) => isActive ? css.active : undefined}>{props.name}</NavLink>
        </div>
    );
};

const MessageItem = (props) => {
    return (
        <div className={css.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )
    let messages = props.state.messages.map( m => <MessageItem message={m.message} id={m.id}/> )

    let sendMessage = () => {
        props.dispatch(sendMessageAC());
    }
    
    let onPostChange = (e) => {
        props.dispatch(updateNewMessageAC(e.currentTarget.value));
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogs}
            </div>
            <div className={css.messages}>
                <div>{messages}</div>
                <div>
                    <textarea value={props.state.newMessageText} onChange={onPostChange}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
