import React from 'react';
import { Link } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Modal from './modal/modal';

const App = () => (
    <div>    
        <Modal />                
        <header className="modal_session">
            {/* <Link to='/'>
                <h1>Camp Away</h1>
            </Link> */}
            <GreetingContainer />
        </header>
    </div>       
);

export default App;