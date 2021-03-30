import React from "react";
import {addPost, updateNewPostText} from "../../../redux/profileReducer";
import ProfilePostInput from "./ProfilePostInput";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

const ProfilePostInputContainer = connect(mapStateToProps, {
    addPost: addPost,
    updateNewPostText: updateNewPostText
})(ProfilePostInput)

export default ProfilePostInputContainer
