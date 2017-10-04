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

export function getUsers() {
    return (dispatch) => {
        let json = [{
            'name': 'Ansuman',
            'place': 'Bhubaneswar',
            'id': 1
        },
        {
            'name': 'abc',
            'place': 'delhi',
            'id': 2
        }];
        dispatch(resolvedGetUsers(json));
        // fetch('http://services.groupkt.com/country/get/all')
        // .then(response => response.json())
        // .then(json => dispatch(resolvedGetUsers(json)))
    }
}

function resolvedGetUsers(data) {
  return {
    type: 'RESOLVED_GET_USERS',
    data: data
  } 
}