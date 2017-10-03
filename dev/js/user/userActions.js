export function addUser(user) {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

export function deleteUser(userId) {
    return {
        type: 'DELETE_USER',
        payload: userId
    }
}