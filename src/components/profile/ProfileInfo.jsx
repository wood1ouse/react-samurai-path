import React from "react";
import PersonIcon from "@material-ui/icons/Person";

const ProfileInfo = (props) => {
    return (
        <div className="profile__info">
            <div className="profile__img">
                <PersonIcon className="img__content" style={{color: "white", fontSize: "86px"}}/>
            </div>
            <span className="profile__personal">
                            <span className="profile__status">{props.status}</span>
                            <span className="profile__name">{props.name}</span>
                            <span className="profile__lastname">{props.lastName}</span>
                        </span>
        </div>
    )
}

export default ProfileInfo
