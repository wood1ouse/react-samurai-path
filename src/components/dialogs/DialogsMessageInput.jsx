import React from "react";
import SendIcon from '@material-ui/icons/Send';

const DialogsMessageInput = (props) => {
    let MessageContent = React.createRef();
    let addMessage = () => {
        props.addMessage()
    }
    let onMessageChanged = () => {
        let text = MessageContent.current.value
        props.updateNewMessageText(text)
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
