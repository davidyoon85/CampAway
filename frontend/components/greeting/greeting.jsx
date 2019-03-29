import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../nav/drop_down';

const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="user_session">
            <button onClick={() => openModal('login')}>Login</button>
            <button onClick={() => openModal('signup')}>Signup</button>
        </nav>
    );

    const personalGreeting = () => (
        <div className="nav_logged_in">
            <div className="nav_logged_in_right">

                <div className="drop_menu">
                    <button className="nav_logged_in_logout" onClick={logout}>Log Out</button>
                </div>

                <img className="tent_logo" src={window.footerURL} />
            </div>
        </div>
    )

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;