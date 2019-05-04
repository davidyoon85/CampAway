import React from 'react';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllBookings();
        this.props.fetchAllSpots();
    }

    handleDelete(spotId) {
        this.props.deleteBookings(spotId).then(() => this.props.fetchAllBookings());
    }

    render() {
        if (Object.values(this.props.bookings).length <= 1) {
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
                        {Object.values(this.props.bookings).map(booking => (
                            booking.spot.title
                        ))}
                    </div>
                </div>
            )
        }

    }
}

export default UserProfile;