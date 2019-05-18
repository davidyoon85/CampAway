import { connect } from 'react-redux'
import UserProfile from './user_profile';
import { fetchAllBookings, deleteBooking } from '../../actions/booking_actions';
import { fetchAllSpots } from '../../actions/spot_actions';
import { selectSpots } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    return {
        bookings: state.entities.bookings,
        currentUser: state.entities.users[ownProps.match.params.userId],
        spots: selectSpots(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllBookings: () => dispatch(fetchAllBookings()),
        deleteBooking: (id) => dispatch(deleteBooking(id)),
        fetchAllSpots: () => dispatch(fetchAllSpots()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);