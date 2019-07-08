import { connect } from 'react-redux';
import SpotSearch from './spot_search';
import { fetchAllSpots } from '../../actions/spot_actions';
import { updateFilter, receiveGeolocation } from '../../actions/location_filter_actions';
import { clearAllFilters } from '../../actions/filter_actions';

const mapStateToProps = (state) => ({
    spots: Object.values(state.entities.spots),
    geoLocation: state.ui.geoLocation["address"],
    filters: state.ui.filters
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllSpots: () => dispatch(fetchAllSpots()),  
    receiveGeolocation: (loc) => dispatch(receiveGeolocation(loc)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    clearAllFilters: () => dispatch(clearAllFilters())
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotSearch);