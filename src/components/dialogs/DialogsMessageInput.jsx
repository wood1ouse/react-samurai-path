import React from "react";
import SendIcon from '@material-ui/icons/Send';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const DialogsMessageInput = (props) => {
    let MessageContent = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onMessageChanged = () => {
        let text = MessageContent.current.value
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action)
    }
    return (
        <div className="input-field msg">
            <textarea ref={MessageContent} onChange={onMessageChanged} placeholder="Write a message..."
                      value={props.newMessageText}/>
            <button onClick={addMessage} className="addButton msg"><SendIcon/></button>
        </div>
    )
}

export default DialogsMessageInput
