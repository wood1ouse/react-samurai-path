import React from "react";
import PersonIcon from "@material-ui/icons/Person";

class ProfileInfo extends React.Component{
    render() {
        return (
            <div className="profile__info">
                <div className="profile__img">
                    <PersonIcon className="img__content" style={{color: "white", fontSize: "86px"}}/>
                </div>
                <span className="profile__personal">
                            <span className="profile__status">{this.props.status}</span>
                            <span className="profile__name">{this.props.name}</span>
                            <span className="profile__lastname">{this.props.lastName}</span>
                        </span>
            </div>
        )
    }

}

export default ProfileInfo