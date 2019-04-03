import React from 'react';

class MasterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            title: '',
            body: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title, body, password } = this.state;
        alert(`Your registration detail: \n 
           title: ${title} \n 
           body: ${body} \n
           Password: ${password}`);
    }

    _next() {
        if (this.state.currentStep >= 2) {
        this.setState({
            currentStep: 3
        });} else {
        this.setState({
            currentStep: this.state.currentStep + 1
        });
    }}

    _prev() {
        if (this.state.currentStep >= 2) {
            this.setState({
                currentStep: 3
            });
        } else {
            this.setState({
                currentStep: this.state.currentStep - 1
            });
        }
    }

    previousButton() {

        if (this.state.currentStep !== 1) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this._prev.bind(this)}>
                    Previous
                </button>
            )
        } else {
            return null;
        }
    }

    nextButton() {
        if (this.state.currentStep < 3) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this._next.bind(this)}>
                    Next
                </button>
            )
        } else {
            return null;
        }
    }

    render() {

        let step;

            if (this.state.currentStep === 1) {
                step = <div className="form-group">
                    <label htmlFor="title">title</label>
                    <input
                        className="form-control"
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Enter title"
                        value={this.state.email || ''}
                        onChange={this.handleChange}
                    />
                </div>
            } else if (this.state.currentStep === 2) {
                step = <div className="form-group">
                    <label htmlFor="body">body</label>
                    <input
                        className="form-control"
                        id="body"
                        name="body"
                        type="text"
                        placeholder="gimme ur name"
                        value={this.state.body || ''}
                        onChange={this.handleChange}
                    />
                </div>
            } else {
                step = <React.Fragment>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            className="form-control"
                            id="password"
                            name="password"
                            type="password"
                            placehoder="gimme ur password"
                            value={this.state.password || ''}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="btn btn-success btn-block">Sign Up</button>
                </React.Fragment>
            }

        return (
            <React.Fragment>
                <h1>React Wizard Form 🧙‍♂️</h1>
                <p>Step {this.state.currentStep} </p>

                <form onSubmit={this.handleSubmit.bind(this)}>
                { step }
                    {this.previousButton()}
                    {this.nextButton()}

                </form>
            </React.Fragment>
        );
    }
}

export default MasterForm;