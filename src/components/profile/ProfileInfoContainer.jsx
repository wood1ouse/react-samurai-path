import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";

let mapStateToProps = (state) => {
    return {
        name: state.profilePage.profilePersonalData.firstName,
        lastName: state.profilePage.profilePersonalData.lastName,
        status: state.profilePage.profilePersonalData.status
    }
}

const ProfileInfoContainer = connect(mapStateToProps, null)(ProfileInfo)

export default ProfileInfoContainer
