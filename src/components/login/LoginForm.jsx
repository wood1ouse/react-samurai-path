import React from "react";
import ErrorIcon from '@material-ui/icons/Error';
import {useFormik} from 'formik'



const LoginForm = () =>{

    const initialValues = {
        login: '',
        password: '',
        rememberMe: false,
    }

    const onSubmit = values => {
        console.log(values);
    }

    const validate = values => {
        let errors = {}

        if (!values.login) {
            errors.login = 'Login Required'
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
                           placeholder={formik.errors.login ? formik.errors.login : "Login"}
                           name='login' onChange={formik.handleChange}
                           value={formik.values.login}/>
                    {formik.errors.login ? <ErrorIcon className= "login__form__loginName__errorIcon" /> : null}
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
