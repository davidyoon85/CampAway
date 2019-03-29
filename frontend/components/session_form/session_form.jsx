import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            zip_code: "",
            email_address: "",
            password: "",

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
    }

    loginDemo(e) {
        e.preventDefault();
        this.setState({
            password: '123456',
            first_name: 'Guest',
            last_name: 'demo',
            zip_code: 123456,
            email_address: 'demo@demo.com'}, () => {
                const demoUser = Object.assign({}, this.state);
                this.props.processForm(demoUser).then(this.props.closeModal);
            });
        }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        });
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`errors-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        if (this.props.formType === 'Log in'){

            return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">             
                <big className="title">Welcome back!</big>
                <big className="subtitle">It's about time for another camping trip</big>

                <div onClick={this.props.closeModal} className="close-x">X</div>
                {this.renderErrors()}
                    <div className="login-form">

                    <button className="demo_button" onClick={this.loginDemo}>Log in as Guest</button>
                    &nbsp;
                    <h1>or</h1>

                    <br/>
                    <input type="text"
                    onChange={this.update('email_address')}
                    className="login-input"
                    placeholder="Email address"
                    />
                    <br/>
                    <input type="password"
                    onChange={this.update('password')}
                    className="login-input"
                    placeholder="Password"
                    />
                    <br/>
                    <input id="login_submit" 
                    type="submit" 
                    value={this.props.formType} 
                    className="session-submit"/>
                    <br/>
                    <div className="modal_footer1">
                        Don't have a CampAway account? 
                        &nbsp;
                        <span className="modal_signin">{this.props.otherForm}{`!`}</span>
                    </div>
                </div>
                </form>
            </div>
        )
        } else if (this.props.formType === 'Sign up'){
            return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <big className="title">Join Camp Away</big>
                    <big className="subtitle">Discover the best camping near me</big>

                <div onClick={this.props.closeModal} className="close-x">X</div>
                {this.renderErrors()}
                <div className="login-form">

                <div className="modal_table">
                    <div className="modal_table1">
                        <input type="text"
                        onChange={this.update('first_name')}
                        id="login-input-beside1"
                        placeholder="First name..."
                        />
                    </div>

                    <div className="modal_table2">
                    <input type="text"
                    onChange={this.update('last_name')}
                    id="login-input-beside2"
                    placeholder="Last name..."
                    />
                    </div>
                </div>

                    <br/>
                    <input type="text"
                    onChange={this.update('zip_code')}
                    className="login-input"
                    placeholder="Zip code..."
                    />
                    <br/>
                    <input type="text"
                    onChange={this.update('email_address')}
                    className="login-input"
                    placeholder="Email address..."
                    />
                    <br/>
                    <input type="password"
                    onChange={this.update('password')}
                    className="login-input"
                    placeholder="Password..."
                    />
                    <br/>
                    <input 
                    id="login_submit" 
                    type="submit"
                    className="session-submit"/>
                    <div className="modal_footer2">
                    By signing up, I agree to CampAway's<br/> terms and privacy policy.
                    <br/>

                    <p></p>
                    Already have a CampAway account?&nbsp;
                    <span className="modal_signin">{this.props.otherForm}{`!`} </span>
                    </div>
                </div>
                </form>
            </div>
        )}
    }
}

export default withRouter(SessionForm);