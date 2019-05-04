import { connect } from 'react-redux';
import Spot from './spot';
import { deleteSpot, fetchSingleSpot } from '../../actions/spot_actions';
import { makeBooking } from '../../actions/booking_actions';
import  { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  const spot = state.entities.spots[ownProps.match.params.spotId] || {};
  const currentUserId = state.session.id;
  return {
    spot,
    currentUserId,
  };
};
  
  const mapDispatchToProps = (dispatch) => ({
    fetchSpot: id => dispatch(fetchSingleSpot(id)),
    deleteSpot: (spotId) => dispatch(deleteSpot(spotId)),
    makeBooking: (booking) => dispatch(makeBooking(booking)),
    openModal: modal => dispatch(openModal(modal))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Spot);

