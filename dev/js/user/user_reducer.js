    let userList = [{
        'name': 'Ansuman',
        'place': 'Bhubaneswar',
        'id': 1
    },
    {
        'name': 'abc',
        'place': 'delhi',
        'id': 2
    }];

const userReducer = (state=userList, action) => {
    switch (action.type) {
        case "ADD_USER":
            return [
                ...state,
                {
                    'name': action.payload.name,
                    'place': action.payload.place,
                    'id': action.payload.id
                }
            ]
        break;

        case "DELETE_USER":
            return state.filter(userList =>
                userList.id !== parseInt(action.payload)
            )
        break;
    }
    return state;
};

export default userReducer;