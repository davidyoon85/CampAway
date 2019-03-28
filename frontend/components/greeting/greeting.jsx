import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, login, logout, openModal }) => {
    const demoUser = {email_address: 'demo@demo.com', password: '123456'};

    const sessionLinks = () => (
        <nav className="user_session">
            <button onClick={() => openModal('login')}>Login</button>
            <button onClick={() => openModal('signup')}>Signup</button>
            <button onClick={() => login(demoUser)}>Demo</button>
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