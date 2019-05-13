import React from 'react';

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
            <div>
            {this.props.currentUser ? (
                <div className="dropdown">
                    <img className="tent_logo" 
                        src={window.footerURL} 
                        onMouseOver={() => this.props.openModal('dropdown')} 
                       
                        />
                </div>

                ) : (

                    <nav>
                    <ul className="user_session">
                        <li><button 
                            onClick={() => this.props.openModal('signup')}>Sign up</button></li>
                        <li><button 
                            onClick={() => this.props.openModal('login')}>Log in</button></li>
                    </ul>
                    </nav>
                )}
            </div>
        )
    }
}

export default Greeting;