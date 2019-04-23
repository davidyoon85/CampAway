import { connect } from 'react-redux';
import SpotIndex from './spot_index';
import { fetchAllSpots, deleteSpot } from '../../actions/spot_actions';
import { selectSpots } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
    spots: selectSpots(state),
    user: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => {
    
    return {
    fetchAllSpots: () => dispatch(fetchAllSpots()),
    deleteSpot: (spotId) => dispatch(deleteSpot(spotId))
}};

export default connect(mapStateToProps, mapDispatchToProps)(SpotIndex);



//remove to create spot_search_container instead