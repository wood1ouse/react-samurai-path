import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from '@material-ui/icons/Clear';
import axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.users.map(u =>
                        <div className="users">
                            <div className="users__item">
                                <div className="users__item__img">
                                    <PersonIcon style={{fontSize: '36px'}}/>
                                </div>
                                <div className="users__item__name">
                                    {u.name}
                                </div>
                                <div className="users__item__status">
                                    {u.status}
                                </div>
                                <div className="users__item__personal">
                                    <div className="users__item__country">
                                        {"u.location.country"}
                                    </div>
                                    <div className="users__item__city">
                                        {"u.location.city"}
                                    </div>
                                    <button>
                                        {u.followed
                                            ? <button onClick={() => {
                                                this.props.unfollow(u.id)
                                            }}><ClearIcon/></button>
                                            : <button onClick={() => {
                                                this.props.follow(u.id)
                                            }}><AddIcon style={{fontSize: "30px"}}/></button>}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>


        )
    }


}

export default Users
