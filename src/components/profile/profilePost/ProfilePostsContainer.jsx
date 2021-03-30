import {connect} from "react-redux";
import ProfilePosts from "./ProfilePosts";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.myPostsData
    }
}


export default connect(mapStateToProps, null)(ProfilePosts)
