import React from "react";
import ProfilePostInputContainer from "./profilePost/ProfilePostInputContainer";
import ProfilePostsContainer from "./profilePost/ProfilePostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
        return (
            <div className="content">
                <div className="profile">
                    <ProfileInfo profile = {props.profile} status = {props.status} updateUserStatus = {props.updateUserStatus}/>
                    <span className="profile__posts__title">My Posts</span>
                    <ProfilePostsContainer/>
                </div>
                <ProfilePostInputContainer/>
            </div>
        )

}

export default Profile
