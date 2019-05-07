import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

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
            photoFile: [],
            photoUrl: [],
            address: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleFile(e) {
        
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => this.setState(
            { photoUrl: this.state.photoUrl.concat([reader.result]), photoFile: this.state.photoFile.concat([file])}
            );

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: [], photoFile: []});
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        if (name === "address") {
            this.setState({
                [name]: value
            });
                geocodeByAddress(value)
                    .then(results => getLatLng(results[0]))
                    .then(({ lat, lng }) =>
                        this.setState({lat: lat, long: lng})
                        
                );
        } else {
            this.setState({
                [name]: value
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();

        formData.append('spot[title]', this.state.title);
        // if (this.state.photoFile) {
        //     formData.append('spot[photos]', this.state.photoFile);
        // }
        
        for (let i = 0; i < this.state.photos.length; i++) {
            formData.append('spot[photos][]', this.state.photos[i]);
        }

        formData.append('spot[host_id]', this.props.user.id);
        formData.append('spot[body]', this.state.body);
        formData.append('spot[price]', this.state.price);
        formData.append('spot[pets_allow]', this.state.pets_allow);
        formData.append('spot[group_size]', this.state.group_size);
        formData.append('spot[check_in]', this.state.check_in);
        formData.append('spot[check_out]', this.state.check_out);
        formData.append('spot[lat]', this.state.lat);
        formData.append('spot[long]', this.state.long);
        formData.append('spot[campfire]', this.state.campfire);
        formData.append('spot[tent]', this.state.tent);
        formData.append('spot[sites]', this.state.sites);
        formData.append('spot[parking]', this.state.parking);
        formData.append('spot[toilet]', this.state.toilet);
        formData.append('spot[shower]', this.state.shower);
        formData.append('spot[hiking]', this.state.hiking);
        formData.append('spot[biking]', this.state.biking);
        formData.append('spot[wildlife]', this.state.wildlife);
        formData.append('spot[paddling]', this.state.paddling);
        
        this.props.hostSpot(formData).then((response) => {
            this.props.history.push(`/spots/${Object.keys(response.spot)[0]}`);
        });
    }

    handleClick(e) {
        e.preventDefault();
        const currentName = e.target.name;
        this.setState({[currentName]: !this.state[currentName]}, () => {
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
                    className="previous_button"
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
                    className="next_button"
                    type="button" onClick={this._next.bind(this)}>
                    Next
                </button>
            )
        } else {
            return null;
        }
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
        if (this.state.photos) {
        
        }
        let preview = null;
        if (this.state.photoUrl.length > 0) {
            preview = this.state.photoUrl.map((photo, idx) => {
                return <img key={idx} src={photo}/>
            })
        } 
        // this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;

        let step;

            if (this.state.currentStep === 1) {
                step = 
                <div>
                    <div className="form-group">
                        <label className="form_group_title">Name Your Spot</label>
                        <input
                            className="form-control"
                            id="title"
                            name="title"
                            type="text"
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form_group_title">Describe Your Spot</label>
                        <textarea
                            className="form_control_description"
                            id="body"
                            name="body"
                            type="text"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                </div>
            } else if (this.state.currentStep === 2) {
                step = 
                <div>    
                    <div className="form-group">
                        <label className="form_group_title">Daily Price</label>
                        <input
                            className="form-control"
                            id="price"
                            name="price"
                            type="number"
                            placeholder="100"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form_group_title">Sites Available</label>
                        <input
                            className="form-control"
                            id="sites"
                            name="sites"
                            type="number"
                            placeholder="2"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form_group_title">Max Group Size</label>
                        <input
                            className="form-control"
                            id="group_size"
                            name="group_size"
                            type="number"
                            placeholder="4"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form_group_title">Check In Time</label>
                        <input
                            className="form-control"
                            list="check_in"
                            id="check_in"
                            name="check_in"
                            type="text"
                            placeholder="2 PM"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form_group_title">Check Out Time</label>
                        <input
                            className="form-control"
                            id="check_out"
                            name="check_out"
                            type="text"
                            placeholder="11 AM"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form_group_title">Address</label>
                        <input
                            className="form-control"
                            id="address"
                            name="address"
                            type="text"
                            placeholder="New York"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    {/* <div className="form-group">
                        <label className="form_group_title">Latitude</label>
                        <input
                            className="form-control"
                            id="lat"
                            name="lat"
                            type="number"
                            placeholder="40.751628"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form_group_title">Longitude</label>
                        <input
                            className="form-control"
                            id="long"
                            name="long"
                            type="number"
                            placeholder="-73.983933"
                            onChange={this.handleChange}
                        />
                    </div> */}
                </div>
            } else {

                step = <React.Fragment>
                    <>
                        <div className="host_options_title">
                            Choose Camp Features!
                        </div>
                    <div className="create_spot_fo</div>rm">
                         <div className="host_option_main">

                            <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/71/71702.svg"
                                    className={this.state.pets_allow ? 'active_button' : 'host_spot_options'}
                                    name="pets_allow"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/1535/1535413.svg"
                                    className={this.state.campfire ? 'active_button' : 'host_spot_options'}
                                    name="campfire"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/1535/1535412.svg"
                                    className={this.state.tent ? 'active_button' : 'host_spot_options'}
                                    name="tent"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/818/818383.svg"
                                    className={this.state.parking ? 'active_button' : 'host_spot_options'}
                                    name="parking"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/93/93156.svg"
                                    className={this.state.toilet ? 'active_button' : 'host_spot_options'}
                                    name="toilet"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/1536/1536456.svg"
                                    className={this.state.shower ? 'active_button' : 'host_spot_options'}
                                    name="shower"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/71/71423.svg"
                                    className={this.state.hiking ? 'active_button' : 'host_spot_options'}
                                    name="hiking"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/565/565350.svg" 
                                    className={this.state.biking ? 'active_button' : 'host_spot_options'}
                                    name="biking"
                                    onClick={this.handleClick}
                                />
                            </div>
                            {/* <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/54/54127.svg"
                                    className={this.state.wildlife ? 'active_button' : 'host_spot_options'}
                                    name="wildlife"
                                    onClick={this.handleClick}
                                />
                            </div> */}
                            <div className="form-group-options"><input type="image" src="https://image.flaticon.com/icons/svg/38/38607.svg"
                                className={this.state.paddling ? 'active_button' : 'host_spot_options'}
                                name="paddling"
                                onClick={this.handleClick}
                            />               
                            </div>
                        </div>                 
                    </div>
                </>
                    <input type="file" onChange={(e) => this.setState({ photos: e.target.files })} multiple required/>
                    
                    { preview }
                            
                    <div className="form_signup">
                        <input type="submit" className="form_signup_button" value="Create Spot" />
                    </div>
                    
                </React.Fragment>
}

        return (
            <div className="spot_form_main">
                <React.Fragment>
                    <form className="form" onSubmit={this.handleSubmit}>
                    { step }
                        <div className="prev_next_buttons">
                            {this.previousButton()}
                            {this.nextButton()}
                        </div>

                    </form>
                </React.Fragment>
            </div>
        );
    }
}

const mapStateToProps = ({ errors }) => {
    return {
      errors: errors.session,
    };
  };

export default connect(mapStateToProps, null)(withRouter(MasterForm));
