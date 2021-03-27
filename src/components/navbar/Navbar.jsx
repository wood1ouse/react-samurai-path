import React from "react";
import {NavLink} from "react-router-dom";

class Navbar extends React.Component{
    render() {
        console.log(this.props.isAuth);
        return (
            <nav className="navbar">
                <div className="navbar__button">
                    <NavLink to="/profile" activeClassName="activeLink" >Profile</NavLink>
                </div>
                <div className="navbar__button">
                    <NavLink to="/dialogs" activeClassName="activeLink">Messages</NavLink>
                </div>
                <div className="navbar__button">
                    <NavLink to="/users" activeClassName="activeLink">Users</NavLink>
                </div>

                    {this.props.isAuth ? this.props.login
                        : <div className="navbar__button">
                            <NavLink to="/login" activeClassName="activeLink">Login</NavLink>
                        </div>
                    }
            </nav>
        )
    }


}

export default Navbar
