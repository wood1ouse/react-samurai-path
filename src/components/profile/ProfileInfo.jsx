import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import Preloader from "../common/preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className="profile__info">
            <div className="profile__img">
                <PersonIcon className="img__content" style={{color: "white", fontSize: "86px"}}/>
            </div>
            <span className="profile__personal">
                <span className="profile__name">{props.profile.fullName}</span>
                {props.profile.lookingForAJob ? <span className="profile__status">LF Job</span>
                    : <span className="profile__status" style={{backgroundColor: "#1a1a1d"}}>Unemployed</span>}
            </span>
        </div>
    )

}

export default ProfileInfo
