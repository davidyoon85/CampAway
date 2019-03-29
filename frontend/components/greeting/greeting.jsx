import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="user_session">
            <button onClick={() => openModal('login')}>Login</button>
            <button onClick={() => openModal('signup')}>Signup</button>
        </nav>
    );
    
    const personalGreeting = () => (
        <div>
            <h2 id="greeting_text">Hi, {currentUser.first_name}!
            &nbsp;&nbsp;
            <button onClick={logout}>Log Out</button></h2>
        </div>
    )

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;