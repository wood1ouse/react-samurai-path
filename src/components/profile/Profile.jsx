import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";
import ProfilePostInputContainer from "./ProfilePostInputContainer";

const Profile = (props) => {
    return (
        <div className="content">
            <div className="profile">
                <ProfileInfo name={props.state.profilePersonalData.firstName}
                             lastname={props.state.profilePersonalData.lastName}
                             status={props.state.profilePersonalData.status}/>
                <span className="profile__posts__title">My Posts</span>
                <ProfilePosts posts={props.state.myPostsData}/>
            </div>
            <ProfilePostInputContainer store = {props.store}/>
        </div>
    )
}

export default Profile
