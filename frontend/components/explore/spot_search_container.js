import { connect } from 'react-redux';
import SpotSearch from './spot_search';
import { fetchAllSpots, updateFilteredSpots } from '../../actions/spot_actions';
import { selectSpots } from '../../reducers/selectors';
import { receiveGeolocation } from '../../actions/location_filter_actions';
import { updateFilter } from './../../actions/filter_actions';

const mapStateToProps = (state) => ({
    spots: selectSpots(state),
    geoLocation: state.ui.geoLocation["address"],
    filters: state.ui.filters
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllSpots: () => dispatch(fetchAllSpots()),  
    receiveGeolocation: (loc) => dispatch(receiveGeolocation(loc)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    updateFilteredSpots: (filteredSpots) => dispatch(updateFilteredSpots(filteredSpots)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotSearch);



