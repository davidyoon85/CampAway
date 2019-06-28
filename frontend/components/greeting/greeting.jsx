import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {   
        super(props);
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    render() {
        return (
            <>
                {
                    this.props.currentUser ? (
                        <div className="dropdown">
                            <div className="logo_container"> 
                                <img className="tent_logo" 
                                    src={window.footerURL}   
                                />
                                <div className="dropdown_message">
                                    <ul className="dropdown_list">
                                        <li><Link className="nav_host" to={'/host'}>Host</Link></li>
                                        <li><a className="nav_host" onClick={() => this.props.history.push(`/users/${this.props.currentUser.id}`)}>Trips</a></li>                
                                        <li><a className="nav_host" id="nav_host_logout" onClick={this.props.logout}>Log out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <ul className="user_session">
                            <li><button 
                                onClick={() => this.props.openModal('signup')}>Sign up</button></li>
                            <li><button 
                                onClick={() => this.props.openModal('login')}>Log in</button></li>
                        </ul>
                    )
                }
            </>
        )
    }
}

export default Greeting;