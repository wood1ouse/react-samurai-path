import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";

const Profile = (props) => {
    return (
        <div className="content">
            <div className="profile">
                <ProfileInfo name= {props.profile.profilePersonalData.firstName}
                             lastname={props.profile.profilePersonalData.lastName}
                             status={props.profile.profilePersonalData.status}/>
                <span className="profile__posts__title">My Posts</span>
                <ProfilePosts posts = {props.profile.myPostsData}/>
            </div>
        </div>
    )
}

export default Profile
