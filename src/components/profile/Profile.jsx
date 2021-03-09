import React from "react";
import ProfilePostInputContainer from "./ProfilePostInputContainer";
import ProfileInfoContainer from "./ProfileInfoContainer";
import ProfilePostsContainer from "./ProfilePostsContainer";

class Profile extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="profile">
                    <ProfileInfoContainer/>
                    <span className="profile__posts__title">My Posts</span>
                    <ProfilePostsContainer/>
                </div>
                <ProfilePostInputContainer/>
            </div>
        )
    }

}

export default Profile
