import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
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

                {props.isAuth ? <select className="navbar__username" onChange={props.logout}>
                        <option>{props.login}</option>
                        <option className= "navbar__logout">Logout</option>
                </select>
                    : <div className="navbar__button">
                        <NavLink to="/login" activeClassName="activeLink">Login</NavLink>
                    </div>
                }
            </nav>
        )

}

export default Navbar
