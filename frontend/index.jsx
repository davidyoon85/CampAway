import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    window.login = login;
    window.logout = logout;
    const store = configureStore();
    const root = document.getElementById('root');
    
    ReactDOM.render(<Root store={store}/>, root);
});