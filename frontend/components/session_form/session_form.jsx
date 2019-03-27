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
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                Please {this.props.formType} or {this.props.otherForm}
                <div onClick={this.props.closeModal} className="close-x">X</div>
                {this.renderErrors()}
                <div className="login-form">
                    <label>Email Address</label>
                    <input type="text" value={this.state.email_address}
                    onChange={this.update('email_address')}
                    className="login-input"
                    />
                    <br/>
                    <label>Password</label>
                    <input type="password" value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    />
                    <br/>
                    <input type="submit" value={this.props.formType} className="session-submit"/>
                </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm);