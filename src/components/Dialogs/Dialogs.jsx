import React from "react";
import { Field, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";
import css from "./Dialogs.module.css";

const DialogItem = (props) => {
    
    let path = `/dialogs/${props.id}`

    return (
        <div className={css.dialog}>
            <NavLink to={path} className={({ isActive }) => isActive ? css.active : undefined}>{props.name}</NavLink>
        </div>
    );
};

const Dialogs = (props) => {
    let dialogs = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/> )
    let messages = props.messages.map( m => <MessageItem message={m.message} id={m.id} key={m.id}/> )

    const addMessage = (message) => {
        props.sendMessage(message)
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogs}
            </div>
            <div className={css.messages}>
                <div>{messages}</div>
                <AddMessageForm onSubmit={addMessage}/>
            </div>
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <Formik
            initialValues={{ message: '' }}
            onSubmit={(values, { setSubmitting }) => {
                props.onSubmit(values.message)
                values.message = ''
                setSubmitting(false)
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <Field type="text" name="message" as="textarea" placeholder="Add Your Message" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Send Message
                    </button>
                </Form>
            )}
        </Formik>
    )
}

const MessageItem = (props) => {
    return (
        <div className={css.message}>{props.message}</div>
    )
}

export default Dialogs;
