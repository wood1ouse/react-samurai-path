import {connect} from "react-redux";
import ProfilePosts from "./ProfilePosts";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.myPostsData
    }
}

const ProfilePostsContainer = connect(mapStateToProps, null)(ProfilePosts)

export default ProfilePostsContainer
