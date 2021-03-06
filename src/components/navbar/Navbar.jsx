import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__button">
                <NavLink to="/profile" activeClassName="activeLink" value = "Profile">Profile</NavLink>
            </div>
            <div className="navbar__button">
                <NavLink to="/dialogs" activeClassName="activeLink">Messages</NavLink>
            </div>
            <div className="navbar__button">
                <NavLink to="/users" activeClassName="activeLink">Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
