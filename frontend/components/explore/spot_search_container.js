import { connect } from 'react-redux';
import SpotSearch from './spot_search';
import { fetchAllSpots } from '../../actions/spot_actions';
import { selectSpots } from '../../reducers/selectors';
import { receiveGeolocation } from '../../actions/location_filter_actions';

const mapStateToProps = (state) => ({
    spots: selectSpots(state),
    geoLocation: state.ui.geoLocation["address"],
    filters: state.ui.filters
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllSpots: () => dispatch(fetchAllSpots()),  
    receiveGeolocation: (loc) => dispatch(receiveGeolocation(loc))
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotSearch);



