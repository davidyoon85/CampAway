import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class MasterForm extends Component {
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
            address: '',
            errors: [],
            photos: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleFile(event) {
        const reader = new FileReader();
        const file = event.currentTarget.files[0];
        reader.onloadend = () => this.setState(
            { photoUrl: this.state.photoUrl.concat([reader.result]), photoFile: this.state.photoFile.concat([file]) }
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

        const { title, body, price, photos, sites, group_size, check_in, check_out, address } = this.state;

        const errors = this.validate(title, body, price, photos, sites, group_size, check_in, check_out, address);
        if (errors.length > 0) {
          this.setState({ errors });
          return;
        }

        const formData = new FormData();

        for (let i = 0; i < this.state.photos.length; i++) {
            formData.append('spot[photos][]', this.state.photos[i]);
        }
        formData.append('spot[title]', this.state.title);
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

        this.props.hostSpot(formData)
            .then((response) => {
                return (
                this.props.history.push(`/spots/${Object.keys(response.spot)[0]}`)
                )
            })  
    }

    validate(title, body, price, photos, sites, group_size, check_in, check_out, address) {
        const errors = [];
      
        if (title.length === 0) {
          errors.push("Title can't be empty.");
        } 
        if (body.length === 0) {
          errors.push("Description can't be blank.");
        }  
        if (price < 1) {
          errors.push("Price should be over $0.");
        } 
        if (sites < 1) {
            errors.push("Number of sites should be over 0.")
        }
        if (group_size < 1) {
            errors.push("Group size should be over 0.");
        }
        if (check_in.length === 0 || check_out.length === 0) {
            errors.push("Select check in and/or check out time.")
        }
        if (address.length === 0) {
            errors.push("Address cannot be blank.")
        }
        if (photos.length === 0) {
            errors.push("Upload at least 1 photo.")
        }

        return errors;
      }

    handleClick(event) {
        event.preventDefault();
        const currentName = event.target.name;
        this.setState({[currentName]: !this.state[currentName]});
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
                    className="left_arrow"
                    type="button" onClick={this._prev.bind(this)}>
                    <i className="fas fa-angle-left"></i>
                </button>
            )
        } else {
            return (
                <button
                    className="null_arrow"
                    type="button">
                    <i className="fas fa-angle-left"></i>
                </button>
            )
        }
    }

    nextButton() {
        if (this.state.currentStep < 3) {
            return (
                <button
                    className="right_arrow"
                    type="button" onClick={this._next.bind(this)}>
                    <i className="fas fa-angle-right"></i>
                </button>
            )
        } else {
            return (
                <button
                    className="null_arrow"
                    type="button">
                    <i className="fas fa-angle-right"></i>
                </button>
            )
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`errors-${i}`} className="master_form_error">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const { errors } = this.state;

        let preview = null;
        if (this.state.photoUrl.length > 0) {
            preview = this.state.photoUrl.map((photo, idx) => {
                return <img key={idx} src={photo} alt=""/>
            })
        } 

        let step;

        if (this.state.currentStep === 1) {
            step = 
            <>
                <div className="form-group">
                    <label className="form_group_title">Name Your Spot</label>
                    <input
                        className="form-control"
                        id="title"
                        name="title"
                        type="text"
                        value={this.state.title}
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
                        value={this.state.body}
                        onChange={this.handleChange}
                        maxLength="500"
                        cols='20'
                        rows='10'
                        required
                    />
                </div>
            </>
        } else if (this.state.currentStep === 2) {
            step = 
            <>    
                <div className="form-group">
                    <label className="form_group_title">Daily Price</label>
                    <input
                        className="form-control"
                        id="price"
                        name="price"
                        type="number"
                        value={this.state.group_size}
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
                        value={this.state.sites}
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
                        value={this.state.group_size}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form_group_title" htmlFor="check_in">Check In Time</label>
                    <input
                        className="form-control"
                        list="check_in"
                        id="check_in"
                        name="check_in"
                        type="time"
                        value={this.state.check_in}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form_group_title" htmlFor="check_out">Check Out Time</label>
                    <input
                        className="form-control"
                        list="check_out"
                        id="check_out"
                        name="check_out"
                        type="time"
                        value={this.state.check_out}
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
                        value={this.state.address}
                        onChange={this.handleChange}
                        required
                    />
                </div>
            </>
        } else {
            step = <React.Fragment>
                <>
                <div className="host_options_title">
                    Choose Camp Features!
                </div>
                <div className="create_spot_form">
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
                        <div className="form-group-options">
                            <input type="image" src="https://image.flaticon.com/icons/svg/38/38607.svg"
                                className={this.state.paddling ? 'active_button' : 'host_spot_options'}
                                name="paddling"
                                onClick={this.handleClick}
                            />               
                        </div>
                    </div>                 
                </div>
            </>
                <input type="file" id="photo_upload" className="photo_upload" accept="image/*" onChange={(e) => this.setState({ photos: e.target.files })} multiple />
                <label className="photo_upload_button" htmlFor="photo_upload"><i className="fas fa-camera"></i>Upload</label>

                { preview }
                        
                <div className="form_signup">
                    <div className="host_form_errors">
                        {errors.map(error => (
                            <p key={error}> &#10060; {error}</p>
                        ))}
                    </div>
                    <input type="submit" className="form_signup_button" value="Create Spot" />
                </div>

                <div className="spot_error_message">{this.renderErrors()}</div>
                
            </React.Fragment>
        }

        return (
        <div className="spot_form_container">
            <div className="spot_form_nav">
                <div className="form_nav_section">
                    <div className="arrow_container">
                    {this.previousButton()}
                    {this.nextButton()}
                    </div>
                </div>
                <div className="form_nav_empty"></div>
            </div>

            <div className="form_container">
                    <div className="spot_form_main">
                        <React.Fragment>
                            <form className="form" onSubmit={this.handleSubmit} >
                            { step }
                            </form>
                        </React.Fragment>
                    </div>
                    <div className="spot_form_message">
                        <div className="host_message_header">
                            <img className="host_photo" src="https://camp-away-dev.s3.amazonaws.com/profile.jpg" alt=""/>
                            <div className="host_message_details">
                                <p className="host_message_name">Meet David</p>
                                <p>Host Team</p>
                            </div>
                        </div>
                        <div className="host_message">
                            <p>“My team and I are so excited you've chosen us to be your partner in sharing your land with our community 
                                of CampAwayers across the country.</p>
                            <p>We want to help you achieve your hosting goals.</p>
                            <p>
                            <a href="mailto:dev.davidyoon@gmail.com"><nobr className="host_message_email">Email us at any time </nobr>
                            </a>
                            if you have any questions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ errors }) => {
    return {
      errors: errors.spots,
    };
  };

export default connect(mapStateToProps, null)(withRouter(MasterForm));
