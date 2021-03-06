import React from "react";
import DialogsMessageIn from "./DialogsMessageIn";
import DialogsItem from "./DialogsItem";
import DialogsMessageOut from "./DialogsMessageOut";
import DialogsMessageInputContainer from "./DialogsMessageInputContainer";


const Dialogs = (props) => {
    let dialogsItem = props.dialogsData.map(m => <DialogsItem id ={m.id} name={m.name}/>)
    let dialogsMessageOut = props.messagesDataOut.map(m => <DialogsMessageOut id={m.id} msg={m.msg}/>)
    let dialogsMessageIn = props.messagesDataIn.map(m => <DialogsMessageIn id={m.id} msg={m.msg}/>)
    let items = [];

    for (let i = 0; i < dialogsMessageIn.length + dialogsMessageOut.length; i++) {
        items.push(dialogsMessageIn[i], dialogsMessageOut[i])
    }

    return (
        <div>
            <div className="dialogs">
                <div className="dialogs__items">
                    {dialogsItem}
                </div>
                <div className="dialogs__general">
                    <div className={"dialogs__window"}>
                        {items}
                    </div>
                    <DialogsMessageInputContainer/>
                </div>
            </div>
        </div>


    )
}

export default Dialogs

