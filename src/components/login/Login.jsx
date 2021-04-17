import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <LoginForm login = {props.login}/>
    )

}

let mapStateToProps = (state) => ({isAuth: state.auth.isAuth})

export default connect(mapStateToProps, {login})(Login)

