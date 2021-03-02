import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/state";

const ProfilePostInput = (props) => {
    let postContent = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChanged = () => {
        let text = postContent.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }
    return (
        <div className="input-field">
            <textarea ref={postContent} placeholder="Enter your post..." value={props.newPostText}
                      onChange={onPostChanged}/>
            <button className="addButton" onClick={addPost}>Add Post</button>
        </div>
    )
}
export default ProfilePostInput
