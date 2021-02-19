import React from "react";
import ProfilePost from "./ProfilePost";

export default class ProfilePosts extends React.Component {
    render() {
        return (
            <div className="profile__posts">
                <ProfilePost content="Lorem ipsilum"/>
                <ProfilePost
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"/>
                <ProfilePost
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"/>
                <ProfilePost
                    content="Lorem ipsilum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"/>
                <ProfilePost
                    content="Explicabo, nemo enim ipsam voluptatem  magni dolores eos qui lorem ipsilum"/>
                <ProfilePost
                    content="Adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod"/>
                <ProfilePost
                    content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto  sunt explicabo. Nemo enim ipsam voluptatem  magni dolores eos qui"/>
                <ProfilePost
                    content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati  in  et dolorum fuga. Et harum quidem rerum"/>
                <ProfilePost content="Veritatis et quasi architecto  sunt explicabo. Nemo enim ipsam"/>
                <ProfilePost
                    content="perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa"/>
            </div>)
    }
}
