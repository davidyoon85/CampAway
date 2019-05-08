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
                    <div className="user_profile_greeting">
                        <h1>Hi, {this.props.currentUser.first_name}!</h1>
                    </div>
                    <div className="user_status_header">No current trips. Let's <Link className="user_link_index" to={'/spots'}> get you outside!</Link></div>
                </div>
        )} else {

            return (
                <div className="user_profile_container">
                    <div className="user_profile_greeting">
                        <h1>Hi, {this.props.currentUser.first_name}!</h1>
                    </div>
                    <div className="user_bookings_header">
                        <h1>Here are your booked trips:</h1>
                    </div>
                    <div className="user_booking_spot">
                    <ul className="booked_spots_list">
                        {Object.values(this.props.bookings).map(booking=> {
                            return <li className="booked_spot_items" key={booking.id}>
                                <Link className="user_booking_title" to={`/spots/${booking.spot.id}`}>{booking.spot.title}</Link>
                                <div className="user_booking_dates">
                                    <img className="booking-img" src={booking.spot.spotImg}></img>
                                    <br/><p>Check in: {moment(booking.check_in).format("ddd, MMM Do")}</p>
                                    <br/><p>Check out: {moment(booking.check_out).format("ddd, MMM Do")}</p>
                                    <br/><p>Total Price: ${booking.total_price}</p>
                                    {/* <br/><p>Check out: {moment.duration(moment((booking.check_in).diff(moment(booking.check_out))))}</p> */}
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