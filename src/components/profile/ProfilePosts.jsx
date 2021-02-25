import React from "react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = (props) => {
    let myPosts = props.posts.map(p => <ProfilePost id = {p.id} content = {p.content}/>)
    return (
        <div className="profile__posts">
            {myPosts}
        </div>
    )
}

export default ProfilePosts
