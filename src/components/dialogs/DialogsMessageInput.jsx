import React from "react";
import SendIcon from '@material-ui/icons/Send';

const DialogsMessageInput = (props) => {
    const MessageContent = React.createRef();

    const onAddMessage = () => {
        this.props.addMessage()
    }
    const onMessageChanged = () => {
        let text = MessageContent.current.value
        this.props.updateNewMessageText(text)
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
