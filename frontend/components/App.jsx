import React from 'react';

import Nav from './nav/nav';
import Splash from './splash';
import Footer from './footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

const App = () => (
    <div>
        <Nav />  
        <Splash />
        <Footer />
    </div>
);

export default App;