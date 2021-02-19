import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";

export default class Profile extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="profile">
                    <ProfileInfo name="James" lastname="Smith" status="Online"/>
                    <span className="profile__posts__title">My Posts</span>
                    <ProfilePosts/>
                </div>
            </div>
        )
    }
}
