 import { connect } from 'react-redux';
import SpotFilter from './spot_filter';
import { fetchAllSpots } from '../../actions/spot_actions';
import {
  receiveSingleFilter,
  removeSingleFilter,
  clearAllFilters,
  receivePricingFilter,
  removePricingFilter
  } from '../../actions/filter_actions';


const mapStateToProps = state => ({
  filters: state.ui.filters,
})

const mapDispatchToProps = dispatch => ({
  fetchAllSpots: () => dispatch(fetchAllSpots()),
  receiveSingleFilter: filter => dispatch(receiveSingleFilter(filter)),
  removeSingleFilter: filter => dispatch(removeSingleFilter(filter)),
  receivePricingFilter: amount => dispatch(receivePricingFilter(amount)),
  removePricingFilter: amount => dispatch(removePricingFilter(amount)),
  clearAllFilters: () => dispatch(clearAllFilters()),

})

export default connect(mapStateToProps, mapDispatchToProps)(SpotFilter)