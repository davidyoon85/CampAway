import React from 'react';

import { connect } from "react-redux";
import { login, logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        login: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('Login'))}>
                Login
            </button>
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);