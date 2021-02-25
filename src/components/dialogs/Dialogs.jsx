import React from "react";
import DialogsMessageIn from "./DialogsMessageIn";
import DialogsItem from "./DialogsItem";
import DialogsMessageOut from "./DialogsMessageOut";


const Dialogs  = (props) => {
    let dialogsItem = props.items.dialogsData.map(m => <DialogsItem id = {m.id} name = {m.name}/>)
    let dialogsMessageOut = props.messages.messagesDataOut.map(m => <DialogsMessageOut id = {m.id} msg = {m.msg}/>)
    let dialogsMessageIn = props.messages.messagesDataIn.map(m => <DialogsMessageIn id = {m.id} msg = {m.msg}/>)
    let items = [];

    for (let i = 0; i < dialogsMessageIn.length + dialogsMessageOut.length; i++) {
        items.push(dialogsMessageIn[i], dialogsMessageOut[i])
    }

    return (
        <div className="dialogs">
            <div className="dialogs__items">
                {dialogsItem}
            </div>
            <div className="dialogs__window">
                {items}
            </div>
        </div>
    )
}

export default Dialogs

