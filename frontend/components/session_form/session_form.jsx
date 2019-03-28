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
        if (this.props.formType === 'Login'){
            return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                <big className="title">Welcome Back!</big>
                <big className="subtitle">It's about time for another camping trip</big>

                <div onClick={this.props.closeModal} className="close-x">X</div>
                {this.renderErrors()}
                <div className="login-form">
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
                    <div className="modal_footer">
                        Don't have a CampAway account? {this.props.otherForm}
                </div>
                </div>
                </form>
            </div>
        )
        } else if (this.props.formType === 'Signup'){
            return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <big className="title">Join Camp Away</big>
                    <big className="subtitle">Discover the best camping near me</big>

                <div onClick={this.props.closeModal} className="close-x">X</div>
                {this.renderErrors()}
                <div className="login-form">
                    <input type="text"
                    onChange={this.update('first_name')}
                    className="login-input"
                    placeholder="First name..."
                    />
                    <br/>
                    <input type="text"
                    onChange={this.update('last_name')}
                    className="login-input"
                    placeholder="Last name..."
                    />
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
                </div>
                </form>
            </div>
        )
        } 
    }
}

export default withRouter(SessionForm);