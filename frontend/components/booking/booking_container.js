import { connect } from 'react-redux';

import { makeBooking, deleteBooking, fetchAllBookings} from '../../actions/booking_actions';
import { fetchSingleSpot } from '../../actions/spot_actions';
import { openModal } from '../../actions/modal_actions';
import Booking from './booking';

const mapStateToProps = (state, ownProps) => {
  const spot = state.entities.spots[ownProps.spotId] || {};
  return {
  bookings: state.entities.bookings,
  currentUserId: state.session.id,
  listings: state.entities.listings,
  spot
}};

const mapDispatchToProps = dispatch => {
  return {
    makeBooking: booking => dispatch(makeBooking(booking)),
    deleteBooking: id => dispatch(deleteBooking(id)),
    openModal: modalType => dispatch(openModal(modalType)),
    fetchSingleSpot: id => dispatch(fetchSingleSpot(id)),
    fetchAllBookings: () => dispatch(fetchAllBookings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);