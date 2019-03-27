import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
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
        this.props.processForm(user);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        });
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error) => (
                    <li>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                Please {this.props.formType}
                {this.renderErrors()}
                <div>
                    <label>Email Address</label>
                    <input type="text" value={this.state.email_address}
                    onChange={this.update('email_address')}
                    />
                    <br/>
                    <label>Password</label>
                    <input type="password" value={this.state.password}
                    onChange={this.update('password')}
                    />
                    <br/>
                    <input type="submit" value={this.props.formType}/>
                </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;