import React from 'react';

import _ from 'lodash';

import AddUser from './adduser_component';

class Listuser extends React.Component {
    listUser() {
        var userList = this.props.users;
        if(!userList) {
            return;
        }
        return userList.map( (user, index) => {
            return <li className="list-group-item" key={index}>{user.id}. {user.name} - {user.place} 
                        &nbsp; <button className="btn btn-danger" id={user.id} onClick={this.deleteUser.bind(this)}>X</button>
                    </li>
        });
    }
    saveUser(e) {
        e.preventDefault();
        let name = this.refs.name.value,
            place = this.refs.place.value,
            id = _.random(100, 1000);

        this.props.addUser({name, place, id});

        this.refs.name.value = '';
        this.refs.place.value = '';
    }
    deleteUser(e) {
        e.preventDefault();
        this.props.deleteUser(e.target.id);
    }
    componentWillMount() {
        this.props.getUsers();
    }
    render() {
        return(
            <div>
                <AddUser addUser={this.props.addUser}/>
                <h2>Users List (Async Data) </h2>
                <ul className="list-group">
                    {this.listUser()}
                </ul>
            </div>
        );
    }
}

export default Listuser;