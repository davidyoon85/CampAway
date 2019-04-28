import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../nav/drop_down';

class Greeting extends React.Component {
    constructor(props) {
      
        super(props);
        this.onclick = this.onclick.bind(this);
        // let currentUser = props.currentUser;
        // let logout = props.logout
        // let openModal = props.openModal;
    }

    onclick() {
        return e => {
            if (e.target === e.currentTarget) {
            $("#drop_menu").toggleClass("show");
            }
        };
    }

    render() {
       
        return (
            <div>
                {this.props.currentUser ? (
                <div className="nav_logged_in">
                    <div className="nav_logged_in_right">
                        <img  onClick={this.onclick()} className="tent_logo" src={window.footerURL} />
            
                        <div id="drop_menu">
                            <div className="menu_section">
                            <Link className="nav_host" to={'/host'}>Host</Link>
                            <button className="nav_logged_in_logout" onClick={this.props.logout}>Log out</button>
                            </div>
                        </div>
            
                    </div>
                </div>
                ) : (
                    <nav>
                    <ul className="user_session">
                        <li><button onClick={() => this.props.openModal('signup')}>Sign up</button></li>
                        <li><button onClick={() => this.props.openModal('login')}>Log in</button></li>
                    </ul>
                    </nav>
                )}
            </div>
        )
    }
}

export default Greeting;