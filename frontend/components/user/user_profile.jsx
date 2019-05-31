import React from 'react';
import { Link } from 'react-router-dom';
import { geocodeByAddress } from 'react-places-autocomplete';
import moment from 'moment';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            city: '',
            state: '',
            zipCode: this.props.currentUser.zip_code,
            trips: true,
            reviews: false,
        }

        this.tripsButton = this.tripsButton.bind(this);
        this.reviewsButton = this.reviewsButton.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchAllBookings();
        this.props.fetchAllSpots();
        this.getAddressInfoByZip(this.state.zipCode.toString());
    }

    tripsButton(e) {
        e.preventDefault();
        if (this.state.trips === false) {
            this.setState({trips: true, reviews: false})
        } 
    }

    reviewsButton(e) {
        e.preventDefault();
        if (this.state.reviews === false) {
            this.setState({trips: !this.state.trips, reviews: !this.state.reviews})
        } 
    }

    getAddressInfoByZip(zip) {
        geocodeByAddress(zip)
        .then(results => {
            return (
                this.setState({city: results[0].address_components[1].long_name, state: results[0].address_components[2].short_name })
            )
        })
    }

    render() {
        const userReviews = this.props.reviews.filter(review => review.author === this.props.currentUser.id)

        if (Object.values(this.props.bookings).length === 0) {
            return (
                <div className="user_profile_container">
                    <div className="user_booking_spot">
                        <div className="user_profile_sidebar">
                            <div className="bio_panel">
                                <h3 id="bio_panel_name">{this.props.currentUser.first_name}!</h3>
                                <br />
                                <span id="heart_icon" className="fas fa-heart"></span>
                                    CampAwayer since {moment(this.props.currentUser.created_at).format("MMMM YYYY")}
                                <br/>
                                <span id="marker_icon" className="fas fa-map-pin"></span>
                                    From {this.state.city + ', ' + this.state.state}
                            </div> 
                            <div className="panel_body">
                                <h3 id="panel_body_header">Trusted Campawayer</h3>
                                <br />
                                <span id="email_icon" className="far fa-check-circle"></span>
                                    Email address
                                <br />
                                <span id="facebook_icon" className="far fa-check-circle"></span>
                                    Facebook
                            </div>
                        </div>
                        <div className="user_profile_booking_status">
                            <div className="user_status_header">
                                No current trips. Let's <Link className="user_link_index" to={'/spots'}> get you outside!</Link>
                            </div>
                        </div>
                    </div>
                </div>
        )} else {
            if (this.state.trips) {
                return (
                    <div className="user_profile_container">
                        <div className="user_booking_spot">
                        <div className="user_profile_sidebar">
                            <div className="bio_panel">
                                <h3 id="bio_panel_name">{this.props.currentUser.first_name}!</h3>
                                <br />
                                <span id="heart_icon" className="fas fa-heart"></span>
                                    CampAwayer since {moment(this.props.currentUser.created_at).format("MMMM YYYY")}
                                <br/>
                                <span id="marker_icon" className="fas fa-map-pin"></span>
                                    From {this.state.city + ', ' + this.state.state}
                            </div> 
                            <div className="panel_body">
                                <h3 id="panel_body_header">Trusted Campawayer</h3>
                                <br />
                                <span id="email_icon" className="far fa-check-circle"></span>
                                    Email address
                                <br />
                                <span id="facebook_icon" className="far fa-check-circle"></span>
                                    Facebook
                            </div>
                        </div>

                        <ul className="booked_spots_list">
                            <div className="booked_spots_header">
                                <div className="booked_spots_number">
                                    {Object.keys(this.props.bookings).length}
                                    <p name="trips" className="booked_spots_trips_active" onClick={(e) => this.tripsButton(e)}>Trips</p>
                                </div>
                                <div className="booked_user_reviews">
                                    {userReviews.length}
                                    <p name="reviews" className="booked_reviews_number" onClick={(e) => this.reviewsButton(e)}>Reviews</p>
                                </div>            
                            </div>
                            {Object.values(this.props.bookings).map(booking=> {
                                return (
                                    <li className="booked_spot_items" key={booking.id}>
                                        <Link className="user_booking_title" to={`/spots/${booking.spot.id}`}>{booking.spot.title}</Link>
                                        <div className="user_booking_dates">
                                            <img className="booking_img" src={booking.spot.spotImg}></img>
                                            <div className="user_booking_details">
                                                <p><nobr className="user_booking_subheader">Check In:</nobr> {moment(booking.check_in).format("ddd, MMM Do")}</p>
                                                <p><nobr className="user_booking_subheader">Check Out:</nobr> {moment(booking.check_out).format("ddd, MMM Do")}</p>
                                                <p><nobr className="user_booking_subheader">Number of Guests:</nobr> {booking.num_guests}</p>
                                                <p><nobr className="user_booking_subheader">Total Price:</nobr> ${booking.total_price}</p>
                                            </div>
                                        </div>
                                        <button className="booking_delete_button" onClick={() => this.props.deleteBooking(booking.id)}>Delete</button>
                                    </li>
                                )
                            })}
                        </ul>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="user_profile_container">
                        <div className="user_booking_spot">
                            <div className="user_profile_sidebar">
                                <div className="bio_panel">
                                    <h3 id="bio_panel_name">{this.props.currentUser.first_name}!</h3>
                                    <br />
                                    <span id="heart_icon" className="fas fa-heart"></span>
                                        CampAwayer since {moment(this.props.currentUser.created_at).format("MMMM YYYY")}
                                    <br/>
                                    <span id="marker_icon" className="fas fa-map-pin"></span>
                                        From {this.state.city + ', ' + this.state.state}
                                </div> 
                                <div className="panel_body">
                                    <h3 id="panel_body_header">Trusted Campawayer</h3>
                                    <br />
                                    <span id="email_icon" className="far fa-check-circle"></span>
                                        Email address
                                    <br />
                                    <span id="facebook_icon" className="far fa-check-circle"></span>
                                        Facebook
                                </div>
                            </div>

                            <ul className="booked_spots_list">
                                <div className="booked_spots_header">
                                    <div className="booked_spots_number">
                                        {Object.keys(this.props.bookings).length}
                                        <p name="trips" className="booked_spots_trips" onClick={(e) => this.tripsButton(e)}>Trips</p>
                                    </div>
                                    <div className="booked_user_reviews">
                                        {userReviews.length}
                                        <p name="reviews" className="booked_reviews_number_active" onClick={(e) => this.reviewsButton(e)}>Reviews</p>
                                    </div>            
                                </div>
                                {userReviews.map(review => {
                                    return (
                                    <li className="booked_spot_items" key={review.id}>
                                        <div className="user_booking_details">
                                            <div><nobr className="user_booking_subheader">{moment(review.created_at).format("MMMM Do, YYYY")}</nobr></div>
                                            <div className="user_booking_review">{review.description}</div>
                                            <div className="user_booking_review_buttons">
                                                <Link className='delete-review-button' to={`/spots/${review.spot_id}/reviews/${review.id}`}>Edit</Link>
                                                <button className='delete-review-button' onClick={() => this.props.deleteReview(review.id)}>Delete</button>
                                            </div>
                                        </div>
                                    </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default UserProfile;