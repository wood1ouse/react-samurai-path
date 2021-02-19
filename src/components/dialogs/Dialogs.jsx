import React from "react";
import DialogsItem from "../dialogs/DialogsItem";
import DialogsMessage from "./DialogsMessage";

export default class Dialogs extends React.Component {
    render() {
        return (
            <div className="dialogs">
                <div className="dialogs__items">
                    <DialogsItem name="Greg" id="1"/>
                    <DialogsItem name="Ann" id="2"/>
                    <DialogsItem name="Mark" id="3"/>
                    <DialogsItem name="Rick" id="4"/>
                    <DialogsItem name="Roll" id="5"/>
                </div>
                <div className="dialogs__window">
                    <DialogsMessage msg="Hello?"/>
                    <DialogsMessage msg="I'm glad you can see this?"/>
                    <DialogsMessage msg="So, yes the plan?"/>
                    <DialogsMessage msg="Let's start with?"/>
                </div>
            </div>
        )
    }
}
