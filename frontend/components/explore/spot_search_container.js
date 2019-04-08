import { connect } from 'react-redux';
import SpotSearch from './spot_search';
import { fetchAllSpots } from '../../actions/spot_actions';
import { selectSpots } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
    spots: selectSpots(state)
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllSpots: () => dispatch(fetchAllSpots())
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotSearch);



