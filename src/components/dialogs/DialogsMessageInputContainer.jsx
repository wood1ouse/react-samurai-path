import {connect} from "react-redux";
import React from "react";
import DialogsMessageInput from "./DialogsMessageInput";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";


let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        MessageChanged: (text) => {
            let action = updateNewMessageTextActionCreator(text)
            dispatch(action)
        }
    }
}

const DialogsMessageInputContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsMessageInput)

export default DialogsMessageInputContainer
