import { connect } from 'react-redux';
import Spot from './spot';
import { deleteSpot, fetchSingleSpot } from '../../actions/spot_actions';
import { makeBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
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
    makeBooking: (booking) => dispatch(makeBooking(booking))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Spot);

