import {connect} from 'react-redux';
import {deleteUser, getUsers, addUser} from './user_actions';

import Listuser from './listuser_component';

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
}

const mapDispatch = {deleteUser, getUsers, addUser};

export default connect(mapStateToProps, mapDispatch)(Listuser);