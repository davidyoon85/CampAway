import React from 'react';
import { Link } from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';
import Modal from '../modal/modal';

const Nav = () => (
    <div className="main_nav">
        <Modal />
        <div className="left">
            <Link to='/'>
                <h1>CampAway</h1>
            </Link>
        </div>
        <div className="right">
            <GreetingContainer />
        </div>
    </div>  
);

export default Nav;

