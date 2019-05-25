import { connect } from 'react-redux';
import Spot from './spot';
import { deleteSpot, fetchSingleSpot } from '../../actions/spot_actions';
import { fetchAllBookings, makeBooking } from '../../actions/booking_actions';
import  { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const spot = state.entities.spots[ownProps.match.params.spotId] || {};
  const currentUserId = state.session.id;
  const numReviews = Object.values(state.entities.reviews).length;
  const bookings = Object.values(state.entities.bookings)
  
  return {
    spot,
    currentUserId,
    numReviews,
    bookings
  };
};
  
const mapDispatchToProps = (dispatch) => ({
  fetchSpot: id => dispatch(fetchSingleSpot(id)),
  deleteSpot: (spotId) => dispatch(deleteSpot(spotId)),
  makeBooking: (booking) => dispatch(makeBooking(booking)),
  fetchAllBookings: () => dispatch(fetchAllBookings()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Spot);

