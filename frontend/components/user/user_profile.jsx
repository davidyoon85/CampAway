import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllBookings();
        this.props.fetchAllSpots();
    }

    render() {

        if (Object.values(this.props.bookings).length === 0) {
            return (
                <div className="user_profile_booking_status">
                    {/* <div className="user_profile_greeting">
                        <h1>Hi, {this.props.currentUser.first_name}!</h1>
                    </div> */}
                    <div className="user_status_header">No current trips. Let's <Link className="user_link_index" to={'/spots'}> get you outside!</Link></div>
                </div>
        )} else {
            return (
                <div className="user_profile_container">
                    {/* <div className="user_profile_greeting">
                        <h1>Hi, {this.props.currentUser.first_name}!</h1>
                    </div> */}
                    {/* <div className="user_bookings_header">
                        <h1>Here are your booked trips:</h1>
                    </div> */}
                    <div className="user_booking_spot">
                    <div className="user_profile_sidebar">
                        <div className="bio_panel">
                            <h3 id="bio_panel_name">{this.props.currentUser.first_name}!</h3>
                            <br />
                            <span id="heart_icon" className="fas fa-heart"></span>
                            CampAwayer since {moment(this.props.currentUser.created_at).format("MMMM YYYY")}
                           <br/>
                            <span className="fas fa-map-marker-alt"></span>
                           From {this.props.currentUser.zip_code}
                        </div> 
                        <div className="panel_body">
                            <h3 id="panel_body_header">Trusted Campawayer</h3>
                            <br />
                            <span className="far fa-check-circle"></span>
                            Email address
                            <br />
                            <span className="far fa-check-circle"></span>
                            Facebook
                        </div>
                    </div>
                    <ul className="booked_spots_list">
                        {Object.values(this.props.bookings).map(booking=> {
                            return <li className="booked_spot_items" key={booking.id}>
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
                        }
                        )
                    }
                    </ul>
                    </div>
                </div>
               
            )
        }
    }
}

export default UserProfile;