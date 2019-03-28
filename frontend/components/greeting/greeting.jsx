import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="user_session">
            <button onClick={() => openModal('login')}>Login</button>
            <button onClick={() => openModal('signup')}>Signup</button>
            <button onClick={() => openModal('demo')}>Demo</button>
        </nav>
    );
    
    const personalGreeting = () => (
        <div>
            <h2>Hi, {currentUser.first_name}!</h2>
            <button onClick={logout}>Log Out</button>
        </div>
    )

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;