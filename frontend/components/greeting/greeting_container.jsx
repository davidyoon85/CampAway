import React from 'react';

import { connect } from "react-redux";
import { login, logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
    // const sessionLinks = () => (
    //     <nav>
    //     <ul className="user_session">
    //         <li><button onClick={() => openModal('signup')}>Sign up</button></li>
    //         <li><button onClick={() => openModal('login')}>Log in</button></li>
    //     </ul>
    //     </nav>
    // );
    
    // const personalGreeting = () => (
    //     <div className="nav_logged_in">
    //         <div className="nav_logged_in_right">
    
    //             <div className="drop_menu">
    //                 <Link className="nav_host" to={'/host'}>Host</Link>
    //                 <button className="nav_logged_in_logout" onClick={logout}>Log out</button>
    //             </div>
    
    //             <img className="tent_logo" src={window.footerURL} />
    //         </div>
    //     </div>
    // )

    return {
        currentUser: users[session.id],
        // sessionLinks,
        // personalGreeting
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        login: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('Login'))}>
                Login
            </button>
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);