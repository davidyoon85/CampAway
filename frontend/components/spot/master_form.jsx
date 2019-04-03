import React from 'react';
import { withRouter } from 'react-router-dom';

class MasterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            host_id: props.user.id,
            currentStep: 1,
            title: '',
            body: '',
            price: 0,
            pets_allow: false,
            group_size: 0,
            check_in: '',
            check_out: '',
            lat: 0,
            long: 0,
            campfire: false,
            tent: false,
            sites: 0,
            parking: false,
            toilet: false,
            shower: false,
            hiking: false,
            biking: false,
            wildlife: false,
            paddling: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        debugger
        event.preventDefault();
        debugger

        this.props.hostSpot(this.state);
        this.props.history.push('/posts');
    }

    handleClick(e) {
        e.preventDefault();
        const currentName = e.target.name;
        debugger
        this.setState({[currentName]: !this.state[currentName]}, () => {
            debugger
        });
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
        if (this.state.currentStep <= 1) {
            this.setState({
                currentStep: 1
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
                step = 
                <div>
                    <div className="form-group">
                        <label htmlFor="title">Name Your Spot</label>
                        <input
                            className="form-control"
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Enter a name for your spot!"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="body">Describe Your Spot</label>
                        <input
                            className="form-control"
                            id="body"
                            name="body"
                            type="text"
                            placeholder="Enter a description for your spot!"
                            value={this.state.body}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
            } else if (this.state.currentStep === 2) {
                step = 
                <div>    
                    <div className="form-group">
                        <label>Enter Daily Price</label>
                        <input
                            className="form-control"
                            id="price"
                            name="price"
                            type="number"
                            placeholder="Enter daily price (ex: 100)"
                            value={this.state.price}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sites">Sites Available</label>
                        <input
                            className="form-control"
                            id="sites"
                            name="sites"
                            type="number"
                            placehoder="Enter the number of sites available (ex: 4)"
                            value={this.state.sites}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Max Group Size</label>
                        <input
                            className="form-control"
                            id="group_size"
                            name="group_size"
                            type="number"
                            placeholder="Enter the maximum number of guests on one site (ex: 4)"
                            value={this.state.group_size}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="check_in">Check In Time</label>
                        <input
                            className="form-control"
                            id="check_in"
                            name="check_in"
                            type="text"
                            placeholder="Enter the time to check in by (ex: 2PM)"
                            value={this.state.check_in}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="check_out">Check Out Time</label>
                        <input
                            className="form-control"
                            id="check_out"
                            name="check_out"
                            type="text"
                            placeholder="Enter the time to check out by (ex: 11AM)"
                            value={this.state.check_out}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter The Latitude</label>
                        <input
                            className="form-control"
                            id="lat"
                            name="lat"
                            type="number"
                            placeholder="Enter latitutde (ex: 100)"
                            value={this.state.lat}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Longitude</label>
                        <input
                            className="form-control"
                            id="long"
                            name="long"
                            type="number"
                            placeholder="Enter longitude (ex: 100)"
                            value={this.state.long}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
            } else {

                step = <React.Fragment>
                    <div className="host_option_main">
                        <div className="host_option_amenities">

                        <h1>CHOOSE YOUR AMENITIES!</h1><br />
                            <div className="form-group">
                                <input type="image" src="https://image.flaticon.com/icons/svg/71/71702.svg"
                                    className={this.state.pets_allow ? 'active_button' : 'host_spot_options'}
                                    name="pets_allow"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group">
                                <input type="image" src="https://image.flaticon.com/icons/svg/1535/1535413.svg"
                                    className={this.state.campfire ? 'active_button' : 'host_spot_options'}
                                    name="campfire"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group">
                                <input type="image" src="https://image.flaticon.com/icons/svg/1535/1535412.svg"
                                    className={this.state.tent ? 'active_button' : 'host_spot_options'}
                                    name="tent"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group">
                                <input type="image" src="https://image.flaticon.com/icons/svg/818/818383.svg"
                                    className={this.state.parking ? 'active_button' : 'host_spot_options'}
                                    name="parking"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group">
                                <input type="image" src="https://image.flaticon.com/icons/svg/93/93156.svg"
                                    className={this.state.toilet ? 'active_button' : 'host_spot_options'}
                                    name="toilet"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group">
                                <input type="image" src="https://image.flaticon.com/icons/svg/1536/1536456.svg"
                                    className={this.state.shower ? 'active_button' : 'host_spot_options'}
                                    name="shower"
                                    onClick={this.handleClick}
                                />
                            </div>
                        </div>
                        <div className="host_option_activities">
                            <h1>CHOOSE YOUR ACTIVITIES!</h1><br />
                            <div className="form-group">
                                <input type="image" src="https://image.flaticon.com/icons/svg/71/71423.svg"
                                    className={this.state.hiking ? 'active_button' : 'host_spot_options'}
                                    name="hiking"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group">
                                <input type="image" src="https://image.flaticon.com/icons/svg/565/565350.svg" 
                                    className={this.state.biking ? 'active_button' : 'host_spot_options'}
                                    name="biking"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group">
                                <input type="image" src="https://image.flaticon.com/icons/svg/54/54127.svg"
                                    className={this.state.wildlife ? 'active_button' : 'host_spot_options'}
                                    name="wildlife"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group"><input type="image" src="https://image.flaticon.com/icons/svg/38/38607.svg"
                                className={this.state.paddling ? 'active_button' : 'host_spot_options'}
                                name="paddling"
                                onClick={this.handleClick}
                            />
                            
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    <input type="submit" className="btn btn-success btn-block" value="Sign Up" />
                    
                </React.Fragment>
            }

        return (
            <React.Fragment>
                <h1>Create Your Spot!</h1>
                <p>Step {this.state.currentStep} </p>

                <form onSubmit={this.handleSubmit}>
                { step }
                    {this.previousButton()}
                    {this.nextButton()}

                </form>
            </React.Fragment>
        );
    }
}

export default withRouter(MasterForm);