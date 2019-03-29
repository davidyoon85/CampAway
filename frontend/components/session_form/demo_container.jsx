// import React from 'react';
// import { connect } from 'react-redux';
// import { login } from '../../actions/session_actions';
// import { openModal, closeModal } from '../../actions/modal_actions';
// import SessionForm from './session_form';

// const mapStateToProps = ({ errors }) => {
//     return {
//         errors: errors.session,
//         formType: 'Demo'
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     const user = {
//         password: '123456',
//         first_name: 'Demo User',
//         last_name: 'demo',
//         zip_code: 123456,
//         email_address: 'demo@demo.com'};

//     return {
//         processForm: user => dispatch(login(user)),
//         // otherForm: (
//         //     <button onClick={(user) => dispatch(login(user))}>
//         //     </button>
//         // ),
//         closeModal: () => dispatch(closeModal())
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);