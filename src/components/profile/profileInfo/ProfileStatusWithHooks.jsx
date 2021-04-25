import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

        return (
            <>
                {editMode
                    ? <input onChange={onStatusChange} onBlur={deactivateEditMode}
                             value = {status} className="profile__status__input"/>
                    : <span onDoubleClick={activateEditMode} className="profile__status">
                        {!editMode
                            ? props.status
                            : 'No status'} </span>
                }
            </>
        )

}

export default ProfileStatusWithHooks
