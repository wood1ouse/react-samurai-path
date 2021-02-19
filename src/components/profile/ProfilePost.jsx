import React from "react";
import PersonIcon from "@material-ui/icons/Person";

export default class ProfilePost extends React.Component {
    render() {
        return (
            <div className="profile__post">
                <div className="profile__post__img">
                    <PersonIcon style={{color: "white"}}/>
                </div>
                <div className="profile__post__content">{this.props.content}</div>
            </div>
        )
    }
}
