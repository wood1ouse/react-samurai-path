import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesDataOut: state.dialogsPage.messagesDataOut,
        messagesDataIn: state.dialogsPage.messagesDataIn,
        isAuth: state.auth.isAuth,
    }
}


export default compose(
    connect(mapStateToProps, null),
    withAuthRedirect
)(Dialogs)
