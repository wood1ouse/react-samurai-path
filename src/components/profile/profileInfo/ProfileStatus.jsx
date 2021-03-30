import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    editModeOn = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }
    editModeOff = () => {
        this.setState(
            {
                editMode: false
            },
            this.props.updateUserStatus(this.state.status)
        )
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ? <input onChange={this.onStatusChange} onBlur={this.editModeOff} className="profile__status__input"
                             value={this.state.status}/>
                    : <span onDoubleClick={this.editModeOn} className="profile__status">
                        {this.props.status
                            ? this.props.status
                            : 'No status'} </span>
                }
            </>
        )
    }

}

export default ProfileStatus
