import React from "react";
import ProfilePost from "./ProfilePost";

class ProfilePosts extends React.Component{
    render() {
        let myPosts = this.props.posts.map((p, i) => <ProfilePost key = {i} content = {p.content}/>)
        return (
            <div className="profile__posts">
                {myPosts}
            </div>
        )
    }



}

export default ProfilePosts
