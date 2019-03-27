import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Login'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: user => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('Signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);