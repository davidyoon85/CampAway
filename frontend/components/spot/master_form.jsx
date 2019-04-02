import React from 'react';
// import { Step1 } from './form_step1';
// import { Step2 } from './form_step2';
// import { Step3 } from './form_step3';

class MasterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            email: '',
            username: '',
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
        const { email, username, password } = this.state;
        alert(`Your registration detail: \n 
           Email: ${email} \n 
           Username: ${username} \n
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
                currentStep: this.state.currentStep + 1
            });
        }
    }

    previousButton() {

    //     if (currentStep !== 1) {
    //         return (
    //             <button
    //                 className="btn btn-secondary"
    //                 type="button" onClick={this._prev}>
    //                 Previous
    //   </button>
    //         )
    //     }
    //     return null;
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
                    <label htmlFor="email">Email</label>
                    <input
                        className="form-control"
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>
            } else if (this.state.currentStep === 2) {
                step = <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        className="form-control"
                        id="username"
                        name="username"
                        type="text"
                        placeholder="gimme ur name"
                        value={this.state.username}
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
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="btn btn-success btn-block">Sign Up</button>
                </React.Fragment>
            }

        // const Step1 = (props) => {
        //     if (props.currentStep !== 1) {
        //         return null;
        //     }

        //     return (
        //         <div className="form-group">
        //             <label htmlFor="email">Email</label>
        //             <input
        //                 className="form-control"
        //                 id="email"
        //                 name="email"
        //                 type="text"
        //                 placeholder="Enter email"
        //                 value={props.email}
        //                 onChange={props.handleChange}
        //             />
        //         </div>
        //     );
        // };

        // const Step2 = (props) => {
        //     if (props.currentStep !== 2) {
        //         return null;
        //     }

        //     return (
        //         <div className="form-group">
        //             <label htmlFor="username">Username</label>
        //             <input
        //                 className="form-control"
        //                 id="username"
        //                 name="username"
        //                 type="text"
        //                 placeholder="gimme ur name"
        //                 value={props.username}
        //                 onChange={props.handleChange}
        //             />
        //         </div>
        //     );
        // }

        // const Step3 = (props) => {
        //     if (props.currentStep !== 3) {
        //         return null;
        //     }

        //     return (
        //         <React.Fragment>
        //             <div className="form-group">
        //                 <label htmlFor="password">Password</label>
        //                 <input
        //                     className="form-control"
        //                     id="password"
        //                     name="password"
        //                     type="password"
        //                     placehoder="gimme ur password"
        //                     value={props.password}
        //                     onChange={props.handleChange}
        //                 />
        //             </div>
        //             <button className="btn btn-success btn-block">Sign Up</button>
        //         </React.Fragment>
        //     );
        // }

        return (
            <React.Fragment>
                <h1>React Wizard Form 🧙‍♂️</h1>
                <p>Step {this.state.currentStep} </p>

                <form onSubmit={this.handleSubmit}>
                { step }
                    {/* <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange.bind(this)}
                        email={this.state.email}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange.bind(this)}
                        username={this.state.username}
                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange.bind(this)}
                        password={this.state.password}
                    /> */}
                    {this.previousButton()}
                    {this.nextButton()}

                </form>
            </React.Fragment>
        );
    }
}

export default MasterForm;