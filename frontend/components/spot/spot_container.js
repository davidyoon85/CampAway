import { connect } from 'react-redux';
import Spot from './spot';
import { fetchSingleSpot } from '../../actions/spot_actions';

const mapStateToProps = (state, ownProps) => {
  const spot = state.entities.spots[ownProps.match.params.spotId] || {};
  const currentUser = state.session.currentUser;
  
  return {
    spot,
    currentUser,
  };
};
  
  const mapDispatchToProps = (dispatch) => ({
    fetchSpot: id => dispatch(fetchSingleSpot(id))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Spot);

