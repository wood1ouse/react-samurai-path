import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
    profilePersonalData: {
        firstName: "Joe",
        lastName: "Smith",
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
}


test('length of posts should be incremented', () => {
    let action = addPost("Test Post")
    let newState = profileReducer(state, action)
    expect(newState.myPostsData.length).toBe(11)
});

test('id of post should be correct', () => {
    let action = addPost("Test Post")
    let newState = profileReducer(state, action)
    expect(newState.myPostsData[10].id).toBe(10)
});

test('delete post is working properly', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.myPostsData.length).toBe(9)
});