import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../nav/drop_down';

const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav>
        <ul className="user_session">
            <li><button onClick={() => openModal('signup')}>Sign up</button></li>
            <li><button onClick={() => openModal('login')}>Log in</button></li>
        </ul>
        </nav>
    );

    const personalGreeting = () => (
        <div className="nav_logged_in">
            <div className="nav_logged_in_right">

                <div className="drop_menu">
                    <button className="nav_logged_in_logout" onClick={logout}>Log out</button>
                </div>

                <img className="tent_logo" src={window.footerURL} />
            </div>
        </div>
    )

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;