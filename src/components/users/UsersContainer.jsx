import React from "react";
import {connect} from "react-redux";
import Preloader from "../common/preloader/Preloader";
import Users from "./Users";
import {
    follow, requestUsers,
    setCurrentPage,
    setUsers,
    toggleFollowingInProgress,
    toggleIsFetching,
    unfollow,
} from "../../redux/usersReducer";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "./users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>

            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress = {this.props.followingInProgress}
                   blured = {this.props.isFetching ? "users blured" : null}
            />
        </>
    }


}


// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}




export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        toggleIsFetching,
        toggleFollowingInProgress,
        requestUsers,

    }),
)(UsersContainer)

