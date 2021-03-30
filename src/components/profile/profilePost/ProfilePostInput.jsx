import React from "react";

class ProfilePostInput extends React.Component{
    postContent = React.createRef();

    onAddPost = () => {
        this.props.addPost()
    }
    onPostChanged = () => {
        let text = this.postContent.current.value
        this.props.updateNewPostText(text)
    }

    render() {
        return (
            <div className="input-field">
            <textarea ref={this.postContent} placeholder="Enter your post..." value={this.props.newPostText}
                      onChange={this.onPostChanged}/>
                <button className="addButton" onClick={this.onAddPost}>Add Post</button>
            </div>
        )
    }

}
export default ProfilePostInput
