import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import Nav from './nav/nav';
import Splash from './splash';
import SpotContainer from './spot/spot_container';
// import SpotIndexContainer from './spot/spot_index_container';
import SpotFormContainer from './spot/spot_form_container';
import Footer from './footer';
import SpotSearchContainer from './explore/spot_search_container'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
// import MasterForm from './spot/spot_form_container';

library.add(faIgloo);

const App = () => {
  return (
    <div>
      <Route path="/" component={Nav} />
        <div className='main-class'>
          <Switch>
            <Route path="/spots/:spotId" component={SpotContainer} />
            <Route path="/spots" component={SpotSearchContainer} />
            <Route path="/host" component={SpotFormContainer}/>
            <Route path="/" component={Splash} />
          </Switch>
        </div> 
      {/* <Footer /> */}
    </div>
  )
};

export default App;