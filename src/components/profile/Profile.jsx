import React from "react";
import ProfilePostInputContainer from "./ProfilePostInputContainer";
import ProfilePostsContainer from "./ProfilePostsContainer";
import ProfileInfo from "./ProfileInfo";

class Profile extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="profile">
                    <ProfileInfo profile = {this.props.profile}/>
                    <span className="profile__posts__title">My Posts</span>
                    <ProfilePostsContainer/>
                </div>
                <ProfilePostInputContainer/>
            </div>
        )
    }

}

export default Profile
