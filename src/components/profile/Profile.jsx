import React from "react";
import ProfilePostInputContainer from "./ProfilePostInputContainer";
import ProfilePostsContainer from "./ProfilePostsContainer";
import ProfileInfo from "./ProfileInfo";
import {Redirect} from "react-router";

const Profile = (props) => {

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }
        return (
            <div className="content">
                <div className="profile">
                    <ProfileInfo profile = {props.profile}/>
                    <span className="profile__posts__title">My Posts</span>
                    <ProfilePostsContainer/>
                </div>
                <ProfilePostInputContainer/>
            </div>
        )

}

export default Profile
