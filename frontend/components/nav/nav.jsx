import React from 'react';

import GreetingContainer from '../greeting/greeting_container';
import Modal from '../modal/modal';

const Nav = () => (
    <div className="main_nav">
        <Modal />
        <div className="left">
            <a href="/">CAMPAWAY</a>
        </div>
        <div className="right">
            <GreetingContainer />
        </div>
    </div>
);

export default Nav;

