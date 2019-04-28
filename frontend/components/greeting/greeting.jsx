import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../nav/drop_down';

class Greeting extends React.Component {
    constructor(props) {   
        super(props);
        // this.onclick = this.onclick.bind(this);
        // this.mouseOut = this.mouseOut.bind(this);
    }

    // onclick() {
    //     return e => {
    //         if (e.target === e.currentTarget) {
    //         $("#drop_menu").addClass("show");
    //         }
    //     };
    // }

    // mouseOut() {
    //     return e => {
    //         if (e.target === e.currentTarget) {
    //         $("#drop_menu").removeClass("show");
    //         }
    //     };
    // }

    render() {
       
        return (
            <div>
            {this.props.currentUser ? (
                <div className="dropdown"  >
                    <img className="tent_logo" src={window.footerURL} />
        
                    <div id="drop_menu">
                        {/* <ul className="menu_section"> */}
                            <li><Link className="nav_host" to={'/host'}>Host</Link></li>
                            <li><a className="nav_host" onClick={this.props.logout}>Log out</a></li>
                        {/* </ul> */}
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