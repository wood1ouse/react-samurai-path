import React from "react";
const ProfilePostInput = (props) => {
    let postContent = React.createRef();
    let addPost = () => {
        let text = postContent.current.value
        props.addPost(text)
        postContent.current.value = ''
    }
    return (
        <div className="input-field">
            <textarea ref = {postContent} placeholder="Enter your post..."/>
            <button className = "addButton" onClick={addPost}>Add Post</button>
        </div>
    )
}
export default ProfilePostInput
