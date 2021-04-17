import React from "react";
import ErrorIcon from '@material-ui/icons/Error';
import {useFormik} from 'formik'


const LoginForm = (props) =>{

    const initialValues = {
        email: '',
        password: '',
        rememberMe: false,
    }

    const onSubmit = values => {
        props.login(values.email, values.password, values.rememberMe)
    }

    const validate = values => {
        let errors = {}

        if (!values.email) {
            errors.email = 'Login Required'
        }
        if (!values.password) {
            errors.password = 'Password Required'
        }

        return errors
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })


    return (
        <div className="login">
            <form className="login__form" onSubmit={formik.handleSubmit}>
                <div className= "login__form__field">
                    <input className="login__form__loginName"
                           placeholder={formik.errors.email ? formik.errors.email : "Login"}
                           name='email' onChange={formik.handleChange}
                           value={formik.values.email}/>
                    {formik.errors.email ? <ErrorIcon className= "login__form__loginName__errorIcon" /> : null}
                </div>

                <div className= "login__form__field">
                    <input className="login__form__password" type="password" name='password'
                           placeholder={formik.errors.password ? formik.errors.password : "Password"}
                           onChange={formik.handleChange}
                           value={formik.values.password}/>
                    {formik.errors.password ? <ErrorIcon className={"login__form__password__errorIcon"}/> : null}
                </div>

                <div className="login__form__checkbox">
                    <input type="checkbox" name="rememberMe" onChange={formik.handleChange}/>
                    <label>Remember Me</label>
                </div>
                <button type='submit' className="login__form__button">Login</button>
            </form>
        </div>
    )
}

export default LoginForm
