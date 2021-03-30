import React from "react";

const LoginForm = () => {
    return (
        <div className= "login">
            <form className="login__form">
                <input className = "login__form__loginName" placeholder="Login"/>
                <input  className="login__form__password" type = "password" placeholder="Password"/>
                <div className="login__form__checkbox">
                    <input type = "checkbox"/>
                    <label>Remember Me</label>
                </div>
                <button className = "login__form__button">Login</button>
            </form>
        </div>
    )
}

export default LoginForm
