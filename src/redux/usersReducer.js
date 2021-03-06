const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Yuri',
            status: 'Looking for a job!',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 2,
            followed: false,
            fullName: 'Alexey',
            status: 'Looking for a job!',
            location: {city: 'Tokyo', country: 'Japan'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Mikhail',
            status: 'Looking for a job!',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 4,
            followed: true,
            fullName: 'Grisha',
            status: 'Looking for a job!',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 5,
            followed: false,
            fullName: 'Anton',
            status: 'Looking for a job!',
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state, action.users]
            }
        default:
            return state
    }

}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer
