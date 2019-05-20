import { connect } from 'react-redux'
import UserProfile from './user_profile';
import { fetchAllBookings, deleteBooking } from '../../actions/booking_actions';
import { fetchAllSpots } from '../../actions/spot_actions';
import { selectSpots } from '../../reducers/selectors';
import { fetchReviews, deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        bookings: state.entities.bookings,
        currentUser: state.entities.users[ownProps.match.params.userId],
        spots: selectSpots(state),
        reviews: Object.values(state.entities.users)[0].reviews
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllBookings: () => dispatch(fetchAllBookings()),
        deleteBooking: (id) => dispatch(deleteBooking(id)),
        fetchAllSpots: () => dispatch(fetchAllSpots()),
        fetchReviews: (id) => dispatch(fetchReviews(id)),
        deleteReview: (review) => dispatch(deleteReview(review))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);