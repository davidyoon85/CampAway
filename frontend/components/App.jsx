import React from 'react';
import { Link } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Modal from './modal/modal';

const App = () => (
    <div className="main_nav">  
        <Modal />                
            <div className="left">
            <Link to='/'>
                <h1>Camp Away</h1>
            </Link>
            </div>
            <div className="right">
            <GreetingContainer />
            </div>
    </div>       
);

export default App;