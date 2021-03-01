import React from "react";

const ProfilePostInput = (props) => {
    let postContent = React.createRef();
    let addPost = () => {
        props.addPost()
    }
    let onPostChanged = () => {
        let text = postContent.current.value
        props.updateNewPostText(text)
    }
    return (
        <div className="input-field">
            <textarea ref = {postContent} placeholder="Enter your post..." value={props.newPostText} onChange={onPostChanged}/>
            <button className = "addButton" onClick={addPost}>Add Post</button>
        </div>
    )
}
export default ProfilePostInput
