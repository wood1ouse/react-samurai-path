import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            profilePersonalData: {
                firstName: "Joe",
                lastName: "Smith",
                status: "Online"
            },
            myPostsData: [
                {id: 30, content: 'Lorem ipsum'},
                {
                    id: 31,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'
                },
                {
                    id: 32,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
                },
                {
                    id: 33,
                    content: 'Lorem ipsilum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
                },
                {id: 34, content: 'Explicabo, nemo enim ipsam voluptatem  magni dolores eos qui lorem ipsilum'},
                {
                    id: 35,
                    content: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod'
                },
                {
                    id: 36,
                    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto  sunt explicabo. Nemo enim ipsam voluptatem  magni dolores eos qui'
                },
                {
                    id: 37,
                    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati  in  et dolorum fuga. Et harum quidem rerum'
                },
                {id: 38, content: 'Veritatis et quasi architecto  sunt explicabo. Nemo enim ipsam'},
                {
                    id: 39,
                    content: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa'
                },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Greg'},
                {id: 2, name: 'Ann'},
                {id: 3, name: 'Mark'},
                {id: 4, name: 'Rick'},
                {id: 5, name: 'Roll'},
            ],
            messagesDataIn: [
                {id: 7, msg: 'Hello'},
                {id: 8, msg: 'I\'m glad you can see this'},
                {id: 9, msg: 'So, yes the plan'},
                {id: 10, msg: 'Let\'s start with'},
                {id: 11, msg: 'At veroissimos ducimus o dignissimos ducimus qui blanditiis'},
                {id: 12, msg: 'Let\'s start with'},
                {id: 13, msg: 'Let\'s start with'},
                {id: 14, msg: 'Let\'s start with'},
                {id: 15, msg: 'Let\'s start with'},
            ],
            messagesDataOut: [
                {id: 16, msg: 'Hello?'},
                {id: 17, msg: 'Who are you?'},
                {id: 18, msg: 'The plan?'},
                {id: 19, msg: '???'},
                {id: 20, msg: 'Man'},
                {id: 21, msg: 'Stop sending me this shit'},
                {id: 22, msg: 'Bru imma block you'},
                {id: 23, msg: 'wtf'},
                {id: 24, msg: '...'},
            ],
            newMessageText: ''
        }

    },

    _callSubscriber() {},

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage =  profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    },

}


export default store
