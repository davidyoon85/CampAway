import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
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
                <form onSubmit={() => this.handleSubmit(this.state)}>
                Please {this.props.formType}
                {this.renderErrors()}
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username}
                    onChange={this.update('username')}
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