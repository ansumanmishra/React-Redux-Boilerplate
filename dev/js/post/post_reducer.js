let allPosts = [{
    'id': 1,
    'title': 'This is a sample post',
    'description': 'Some description goes here'
},
{
    'id': 2,
    'title': 'This is new post',
    'description': 'Some more description goes here'
}];

const postReducer = (state = allPosts, action) => {
    switch (action.type) {
        case "GET_POSTS":
            return [
                ...state
            ];
        break;
    }

    return state;
}

export default postReducer;