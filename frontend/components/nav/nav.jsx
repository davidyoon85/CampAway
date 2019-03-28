import React from 'react';
import { Link } from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';
import Modal from '../modal/modal';

const Nav = () => (
    <div className="main_nav">
        <Modal />
        <div className="left">
                <h1>CAMP AWAY</h1>
        </div>
        <div className="right">
            <GreetingContainer />
        </div>
    </div>  
);

export default Nav;

