import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    profilePersonalData: {
        firstName: "Joe",
        lastName: "Smith",
        status: "Online"
    },
    myPostsData: [
        {id: 1, content: 'Lorem ipsum'},
        {
            id: 2,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
        },
        {
            id: 3,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
        },
        {
            id: 4,
            content: 'Lorem ipsilum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
        },
        {id: 5, content: 'Explicabo, nemo enim ipsam voluptatem  magni dolores eos qui lorem ipsilum'},
        {
            id: 6,
            content: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod'
        },
        {
            id: 7,
            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto  sunt explicabo. Nemo enim ipsam voluptatem  magni dolores eos qui'
        },
        {
            id: 8,
            content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati  in  et dolorum fuga. Et harum quidem rerum'
        },
        {id: 9, content: 'Veritatis et quasi architecto  sunt explicabo. Nemo enim ipsam'},
        {
            id: 10,
            content: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa'
        },
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = state.newPostText
            return {
                ...state,
                newPostText: '',
                myPostsData: [...state.myPostsData, {id: 10, content: newPost}]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }

}

export const addPost = () => ({type: ADD_POST})

export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then((response) => {
            {
                dispatch(setUserProfile(response.data))
            }
        })
}

export default profileReducer
