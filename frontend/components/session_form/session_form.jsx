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
            password: ""
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
            zip_code: 10001,
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
                <p className="title">Welcome back!</p>
                <p className="subtitle">It's about time for another camping trip</p>

                <div onClick={this.props.closeModal} className="close-x"></div>
                
                    <div className="login-form">

                    <button className="demo_button" onClick={this.loginDemo}>Log in as a Guest</button>
                    &nbsp;
                    <h1>or</h1>

                    <br/>
                    <input type="email"
                        onChange={this.update('email_address')}
                        className="login-input"
                        placeholder="Email address"
                        required
                    />
                    <br/>
                    <input type="password"
                        minLength="6"
                        onChange={this.update('password')}
                        className="login-input"
                        placeholder="Password"
                    />
                    <br/>
                    <div className="session_error_message">{this.renderErrors()}</div>
                    <input id="login_submit" 
                        type="submit" 
                        value={this.props.formType} 
                        className="session-submit"
                    />
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
        } 
        else if (this.props.formType === 'Drop down') {
            return (
            <div id="drop_menu" onClick={() => this.props.closeModal()}>
                <li><Link className="nav_host" to={'/host'}>Host</Link></li>
                <li><a className="nav_host" onClick={() => this.props.history.push(`/users/${this.props.currentUser.id}`)}>Bookings</a></li>                
                <li><a className="nav_host" id="nav_host_logout" onClick={this.props.logout}>Log out</a></li>
            </div>  
            )      
        } 
        else if (this.props.formType === 'Sign up'){
            return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <p className="title">Join CampAway</p>
                    <p className="subtitle">Discover the best camping near me</p>

                <div onClick={this.props.closeModal} className="close-x"></div>
                <div className="login-form">

                <div className="modal_table">
                    <div className="modal_table1">
                        <input type="text"
                            onChange={this.update('first_name')}
                            className="login-input"
                            placeholder="First name..."
                            required
                        />
                    </div>

                    <div className="modal_table2">
                    <input type="text"
                        onChange={this.update('last_name')}
                        className="login-input"
                        placeholder="Last name..."
                        required
                    />
                    </div>
                </div>

                    <br/>
                    <input type="text"
                        onChange={this.update('zip_code')}
                        className="login-input"
                        placeholder="Zip code..."
                        required
                    />
                    <br/>
                    <input type="email"
                        onChange={this.update('email_address')}
                        className="login-input"
                        placeholder="Email address..."
                        required
                    />
                    <br/>
                    <input type="password"
                        minLength="6"
                        onChange={this.update('password')}
                        className="login-input"
                        placeholder="Password..."
                    />
                    <br/>
                    <div className="session_error_message">{this.renderErrors()}</div>
                    <input 
                        id="login_submit" 
                        type="submit"
                        className="session-submit"
                        required
                    />
                    <div className="modal_footer2">
                    By signing up, I agree to CampAway's<br/> terms and privacy policy.
                    <br/>

                    <p></p>
                        <div className="modal_footer2_sub">
                        Already a CampAwayer?&nbsp;
                        <span className="modal_signin">{this.props.otherForm}{`!`} </span>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        )}
    }
}

export default withRouter(SessionForm);