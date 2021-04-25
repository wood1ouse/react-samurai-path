import React from "react";
import {useFormik} from 'formik'

const ProfilePostInput = (props) =>{
    const postContent = React.createRef();

    const initialValues = {
        newPostText: props.newPostText
    }

    const onSubmit = (e) => {
        props.addPost()
        formik.handleReset(e);
    }

    const validate = values => {
        let errors = {}
        if (!values.newPostText) {
            errors.newPostText = "Empty field!"
        }
        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })


    const onPostChanged = e => {
        formik.handleChange(e)
        let text = postContent.current.value
        props.updateNewPostText(text)
    }

        return (
            <form onSubmit={formik.handleSubmit}>
                <div className="input-field">
            <textarea name = "newPostText" ref={postContent} placeholder= {formik.errors.newPostText
                ? "Your post is empty!"
                : "Enter your post..."} value={formik.values.newPostText}
                      onChange = {onPostChanged}/>
                    <button type = 'submit' className="addButton" >Add Post</button>
                </div>
            </form>
        )


}
export default ProfilePostInput
