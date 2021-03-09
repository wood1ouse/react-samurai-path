import {connect} from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesDataOut: state.dialogsPage.messagesDataOut,
        messagesDataIn: state.dialogsPage.messagesDataIn
    }

}

export default connect(mapStateToProps, null)(Dialogs)
