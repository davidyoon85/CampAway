import { connect } from 'react-redux';
import SpotIndex from './spot_index';
import { fetchAllSpots, deleteSpot } from '../../actions/spot_actions';
import { selectSpots } from '../../reducers/selectors';
import { fetchReviews } from '../../actions/review_actions';

const mapStateToProps = (state) => {
    return {
    spots: selectSpots(state),
    user: state.entities.users[state.session.id],
}
};

const mapDispatchToProps = (dispatch) => {
    
    return {
    fetchAllSpots: () => dispatch(fetchAllSpots()),
    deleteSpot: (spotId) => dispatch(deleteSpot(spotId))
}};

export default connect(mapStateToProps, mapDispatchToProps)(SpotIndex);
