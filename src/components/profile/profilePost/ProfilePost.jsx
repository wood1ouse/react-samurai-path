import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import {NavLink} from "react-router-dom";

class ProfilePost extends React.Component{
    render() {
        return (
            <NavLink to='/post' className="profile__post">
                <div className="profile__post__img">
                    <PersonIcon style={{color: "white"}}/>
                </div>
                <div className="profile__post__content">{this.props.content}</div>
            </NavLink>
        )
    }

}

export default ProfilePost
