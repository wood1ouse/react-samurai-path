import React from "react";
import SendIcon from '@material-ui/icons/Send';

const DialogsMessageInput = (props) => {
    let MessageContent = React.createRef();
    let onAddMessage = () => {
        props.addMessage()
    }
    let onMessageChanged = () => {
        let text = MessageContent.current.value
        props.MessageChanged(text)
    }
    return (
        <div className="input-field msg">
            <textarea ref={MessageContent} onChange={onMessageChanged} placeholder="Write a message..."
                      value={props.newMessageText}/>
            <button onClick={onAddMessage} className="addButton msg"><SendIcon/></button>
        </div>
    )
}

export default DialogsMessageInput
