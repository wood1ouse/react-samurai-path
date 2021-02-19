import React from "react";

export default class DialogsMessage extends React.Component {
    render() {
        return (
            <div className="dialogs__message">{this.props.msg}</div>
        )
    }
}
