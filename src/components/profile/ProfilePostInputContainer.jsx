import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer";
import ProfilePostInput from "./ProfilePostInput";

const ProfilePostInputContainer = (props) => {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChanged = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }
    return (
        <ProfilePostInput updateNewPostText={onPostChanged} addPost={addPost}
                          newPostText={state.profilePage.newPostText} />
    )
}
export default ProfilePostInputContainer
