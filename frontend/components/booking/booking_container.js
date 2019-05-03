import { connect } from 'react-redux';

import { createBooking, deleteBooking, clearErrors, requestAllBookings} from '../../actions/bookings_actions';
import { requestListing } from '../../actions/listings_actions';
import { openModal } from '../../actions/modal_actions';
import Booking from './booking';

const mapStateToProps = (state, ownProps) => {
  return {
  bookings: state.entities.bookings,
  currentUserId: state.session.id,
  listings: state.entities.listings
}};

const mapDispatchToProps = dispatch => {
  return {
    createBooking: booking => dispatch(createBooking(booking)),
    deleteBooking: id => dispatch(deleteBooking(id)),
    openModal: modalType => dispatch(openModal(modalType)),
    requestListing: id => dispatch(requestListing(id)),
    requestAllBookings: () => dispatch(requestAllBookings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);