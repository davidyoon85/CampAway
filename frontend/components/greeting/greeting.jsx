import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav>
            <button onClick={() => openModal('login')}>Login</button>
            &nbsp;or&nbsp;
            <button onClick={() => openModal('signup')}>Signup</button>
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