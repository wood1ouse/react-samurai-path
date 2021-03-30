import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {compose} from "redux";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile = {this.props.profile}
                                     status = {this.props.status}
                                     updateUserStatus = {this.props.updateUserStatus}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

