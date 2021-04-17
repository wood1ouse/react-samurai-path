import {connect} from "react-redux";
import React from "react";
import {addMessage, updateNewMessageText} from "../../redux/dialogsReducer";
import DialogsMessageInput from "./DialogsMessageInput";


let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}


export default connect(mapStateToProps, {
    addMessage,
    updateNewMessageText
})(DialogsMessageInput)
