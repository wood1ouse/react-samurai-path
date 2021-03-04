import React from "react";

const ProfilePostInput = (props) => {
    let postContent = React.createRef();
    let onAddPost = () => {
        props.addPost()
    }
    let onPostChanged = () => {
        let text = postContent.current.value
        props.updateNewPostText(text)
    }
    return (
        <div className="input-field">
            <textarea ref={postContent} placeholder="Enter your post..." value={props.newPostText}
                      onChange={onPostChanged}/>
            <button className="addButton" onClick={onAddPost}>Add Post</button>
        </div>
    )
}
export default ProfilePostInput
