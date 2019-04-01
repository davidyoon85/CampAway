import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchAllSpots } from './actions/spot_actions';

//testing
import { fetchSingleSpot } from './actions/spot_actions';

document.addEventListener('DOMContentLoaded', () => {
  
    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.dispatch = store.dispatch;
    window.fetchAllSpots = fetchAllSpots;
    window.fetchSingleSpot = fetchSingleSpot;
    window.getState = store.getState;
    window.setState = store.setState;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});