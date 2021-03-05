import {connect} from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesDataOut: state.dialogsPage.messagesDataOut,
        messagesDataIn: state.dialogsPage.messagesDataIn
    }

}

const DialogsContainer = connect(mapStateToProps, null)(Dialogs)
export default DialogsContainer
