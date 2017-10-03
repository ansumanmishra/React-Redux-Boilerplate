import React from 'react';

import {connect} from 'react-redux';
import {deleteUser} from './userActions.js';

import _ from 'lodash';

import AddUser from './addUser.js';

import './user.scss';

class Listuser extends React.Component {
    listUser() {
        var userList = this.props.users;

        return userList.map( (user, index) => {
            return <li className="list-group-item" key={index}>{user.id}. {user.name} - {user.place} <button id={user.id} className="btn btn-danger" onClick={this.deleteUser.bind(this)}>X</button></li>
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
    render() {
        return(
            <div className="container">
                <AddUser />
                <ul className="list-group">
                    {this.listUser()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
}

const mapDispatch = {deleteUser};

export default connect(mapStateToProps, mapDispatch)(Listuser);