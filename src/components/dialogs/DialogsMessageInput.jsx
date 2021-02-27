import React from "react";
import SendIcon from '@material-ui/icons/Send';

const DialogsMessageInput = () => {
    let MessageContent = React.createRef();
    let showText = () => {
        let text = MessageContent.current.value;
        alert(text)
    }
    return (
        <div className="input-field msg">
            <textarea ref={MessageContent} placeholder="Write a message..."/>
            <button onClick={showText} className="addButton msg"><SendIcon/></button>
        </div>
    )
}

export default DialogsMessageInput
