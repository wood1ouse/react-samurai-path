import React from "react";
import DialogsMessageInput from "./DialogsMessageInput";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";

const DialogsMessageInputContainer = (props) => {
    let state = props.store.getState()
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let MessageChanged = (text) => {
        let action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action)
    }
    return (
        <DialogsMessageInput addMessage={addMessage} MessageChanged={MessageChanged}
                             newMessageText={state.dialogsPage.newMessageText}/>
    )
}
export default DialogsMessageInputContainer
