import React from "react";
import SendIcon from '@material-ui/icons/Send';

class DialogsMessageInput extends React.Component{
    MessageContent = React.createRef();

    onAddMessage = () => {
        this.props.addMessage()
    }
    onMessageChanged = () => {
        let text = this.MessageContent.current.value
        this.props.updateNewMessageText(text)
    }
    render() {
        return (
            <div className="input-field msg">
            <textarea ref={this.MessageContent} onChange={this.onMessageChanged} placeholder="Write a message..."
                      value={this.props.newMessageText}/>
                <button onClick={this.onAddMessage} className="addButton msg"><SendIcon/></button>
            </div>
        )
    }

}

export default DialogsMessageInput
