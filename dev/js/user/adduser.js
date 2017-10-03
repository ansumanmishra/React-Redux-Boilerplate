import React from 'react';

import {connect} from 'react-redux';
import {addUser} from './userActions.js';

class AddUser extends React.Component {
    saveUser(e) {
        e.preventDefault();
        let name = this.refs.name.value,
            place = this.refs.place.value,
            id = _.random(100, 1000);

        this.props.addUser({name, place, id});

        this.refs.name.value = '';
        this.refs.place.value = '';
    }

    render() {
        return(
            <div>
                <form onSubmit={this.saveUser.bind(this)}>
                    <input type="text" ref="name" /> <br/>
                    <input type="text" ref="place" /> <br/>
                    <button type="submit"> Add User</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
}

const mapDispatch = {addUser};

export default connect(mapStateToProps, mapDispatch)(AddUser);