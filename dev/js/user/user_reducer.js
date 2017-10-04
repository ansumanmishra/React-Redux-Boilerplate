const userReducer = (state="", action) => {
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

        case "RESOLVED_GET_USERS":
            return action.data;
        break;
    }
    return state;
};

export default userReducer;