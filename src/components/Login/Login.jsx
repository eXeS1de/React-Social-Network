import React from "react";
import { Field, Form, Formik } from "formik";
import css from "./Login.module.css";
import { validateEmail, validatePassword } from "../../utils/validators";
import { connect } from "react-redux";
import { login } from "../../redux/reducers/authReducer";
import { Navigate } from "react-router-dom";

const Login = (props) => {
    const onSubmit = (values, setStatus) => {
        const {email, password, rememberMe} = values
        props.login(email, password, rememberMe, setStatus);
    }

    if (props.isAuth) return <Navigate to="/profile"/>

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false }}
            onSubmit={(values, { setSubmitting, setStatus }) => {
                props.onSubmit(values, setStatus)
                setSubmitting(false);
            }}
        >
        {({ isSubmitting, errors, touched, status }) => (
            <Form>
                <div>
                    <Field type="email" name="email" validate={validateEmail} />
                    {errors.email && touched.email && <div className={css.error}>{errors.email}</div>}
                </div>
                <div>
                    <Field type="password" name="password" validate={validatePassword}/>
                    {errors.password && touched.password && <div className={css.error}>{errors.password}</div>}
                </div>
                {status?.error && <div className={css.error}>{status.error}</div>}
                <div>
                    <Field type="checkbox" name="rememberMe" /> Remember me
                </div>
                <button type="submit" disabled={isSubmitting}>
                    Login
                </button>
            </Form>
        )}
        </Formik>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)