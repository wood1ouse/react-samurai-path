import React from "react";
import {NavLink} from "react-router-dom";

export default class extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div>
                    <NavLink to="/profile" activeClassName = "activeLink">Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" activeClassName = "activeLink">Messages</NavLink>
                </div>
            </nav>
        )
    }
}
