import { connect } from 'react-redux';
import Spot from './spot';
import { deleteSpot, fetchSingleSpot } from '../../actions/spot_actions';

const mapStateToProps = (state, ownProps) => {
  const spot = state.entities.spots[ownProps.match.params.spotId] || {};
  const currentUserId = state.session.id;
  
  return {
    spot,
    currentUserId
  };
};
  
  const mapDispatchToProps = (dispatch) => ({
    fetchSpot: id => dispatch(fetchSingleSpot(id)),
    deleteSpot: (spotId) => dispatch(deleteSpot(spotId))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Spot);

