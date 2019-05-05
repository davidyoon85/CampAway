import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
    constructor(props) {
   
        super(props)

        // this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllBookings();
        this.props.fetchAllSpots();
    }

    // handleDelete(bookingId) {
    //     () => this.props.deleteBooking(bookingId);
    //     () => this.props.fetchAllBookings();
    // }

    render() {
        const bookingPhotos = {}
        if (Object.values(this.props.bookings).length === 0) {
            return (
                <div className="user_profile_booking_status">
                <h1>You currently have no bookings</h1>
            </div>
        )} else {
            return (
                <div className="user_profile_container">
                    <div className="user_profile_greeting">
                        <h1>Hi, {this.props.currentUser.first_name}!</h1>
                    </div>
                    <div className="user_bookings_header">
                        <h1>Here are your booked spots:</h1>
                    </div>
                    <div className="user_booking_spot">
                    <ul className="booked_spots_list">
                        {Object.values(this.props.bookings).map(booking=> {
                            return <li className="booked_spot_items" key={booking.id}>
                            <Link to={`/spots/${booking.spot.id}`}>{booking.spot.title}</Link>
                            <br/>Check in: {booking.check_in}
                            <br/>Check out: {booking.check_out}
                            <button className="booking_delete_button" onClick={() => this.props.deleteBooking(booking.id)}>Delete Booking</button>
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