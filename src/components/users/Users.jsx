import React from "react";
import User from "./User";

const Users = (props) => {
    let users = props.users.map(u => <User id={u.id} followed={u.followed} fullName={u.fullName} status={u.status}
                                           location={u.location}/>)
    return (<div className="users">
            {users}
        </div>
    )
}

export default Users
