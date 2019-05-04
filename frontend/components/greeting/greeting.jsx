import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {   
        super(props);
    }

    render() {
        return (
            <div>
            {this.props.currentUser ? (
                <div className="dropdown"  >
                    <img className="tent_logo" src={window.footerURL} />
        
                    <div id="drop_menu">
                            <li><Link className="nav_host" to={'/host'}>Host</Link></li>
                            <li><a className="nav_host" onClick={this.props.logout}>Log out</a></li>
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