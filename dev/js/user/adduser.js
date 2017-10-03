import React from 'react';

import {connect} from 'react-redux';
import {addUser} from './userActions.js';

class AddUser extends React.Component {
    saveUser(e) {
        e.preventDefault();
        let name = this.refs.name.value,
            place = this.refs.place.value,
            id = _.random(100, 1000);

        if(name && place) {
            this.props.addUser({name, place, id});

            this.refs.name.value = '';
            this.refs.place.value = '';
        }
    }

    render() {
        return(
            <div>
                <h1>Add User</h1>
                <form onSubmit={this.saveUser.bind(this)}>
                    <div className="form-group">
                        <input type="text" ref="name" placeholder="Enter name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" ref="place" placeholder="Enter place" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary"> Add User</button>
                    </div>
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