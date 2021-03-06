const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Greg'},
        {id: 2, name: 'Ann'},
        {id: 3, name: 'Mark'},
        {id: 4, name: 'Rick'},
        {id: 5, name: 'Roll'},
    ],
    messagesDataIn: [
        {id: 1, msg: 'Hello'},
        {id: 2, msg: 'I\'m glad you can see this'},
        {id: 3, msg: 'So, yes the plan'},
        {id: 4, msg: 'Let\'s start with'},
        {id: 5, msg: 'At veroissimos ducimus o dignissimos ducimus qui blanditiis'},
        {id: 6, msg: 'Let\'s start with'},
        {id: 7, msg: 'Let\'s start with'},
        {id: 8, msg: 'Let\'s start with'},
        {id: 8, msg: 'Let\'s start with'},
    ],
    messagesDataOut: [
        {id: 1, msg: 'Hello?'},
        {id: 2, msg: 'Who are you?'},
        {id: 3, msg: 'The plan?'},
        {id: 4, msg: '???'},
        {id: 5, msg: 'Man'},
        {id: 6, msg: 'Stop sending me this shit'},
        {id: 7, msg: 'Bru imma block you'},
        {id: 8, msg: 'wtf'},
        {id: 9, msg: '...'},
    ],
    newMessageText: ''
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = state.newMessageText
            console.log(newMessage);
             return {
                ...state,
                newMessageText: '',
                messagesDataOut: [...state.messagesDataOut, {id: 10, msg: newMessage}]
            }
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state
    }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer
