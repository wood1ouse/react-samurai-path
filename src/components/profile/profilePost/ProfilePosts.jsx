import React from "react";
import ProfilePost from "./ProfilePost";

function ProfilePosts(props) {
    let myPosts = props.posts.map((p, i) => <ProfilePost key={i} content={p.content}/>)
    return (
        <div className="profile__posts">
            {myPosts}
        </div>
    )
}

export default ProfilePosts
