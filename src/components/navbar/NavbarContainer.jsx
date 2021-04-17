import React from "react";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import Navbar from "./Navbar";

class NavbarContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }


    render() {
        return (
            <Navbar {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}


export default connect(mapStateToProps, {getAuthUserData, logout})(NavbarContainer)
