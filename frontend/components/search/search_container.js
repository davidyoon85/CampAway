import { connect } from 'react-redux';
import Search from './search';
import { updateFilter } from '../../actions/location_filter_actions';
import { receiveGeolocation } from '../../actions/location_filter_actions'


const mapStateToProps = state => ({
    listings: state.entities.listings,
    filters: state.ui.filters
});

const mapDispatchToProps = dispatch => ({
  fetchSingleSpot: (id) => dispatch(fetchSingleSpot(id)),
  fetchAllSpots: () => dispatch(fetchAllSpots()),
  receiveGeolocation: (loc) => dispatch(receiveGeolocation(loc))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);