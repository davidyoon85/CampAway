import merge from 'lodash/merge';
import {
  RECEIVE_SINGLE_FILTER,
  REMOVE_SINGLE_FILTER,
  CLEAR_ALL_FILTERS,
  RECEIVE_PRICING_FILTER,
  REMOVE_PRICING_FILTER
} from '../actions/filter_actions';

const defaultFilters = {
    campfire: false,
    pets_allow: false,
    tent: false,
    parking: false,
    toilet: false,
    shower: false,
    hiking: false,
    biking: false,
    paddling: false,
    price: 1000
}


const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SINGLE_FILTER:
      newState = merge({}, state, { [action.filter]: true })
      return newState;
    case REMOVE_SINGLE_FILTER:
      newState = merge({}, state, { [action.filter]: false })
      return newState;
    case RECEIVE_PRICING_FILTER:
      newState = merge({}, state, { pricing: action.amount })
      return newState;
    case REMOVE_PRICING_FILTER:
      newState = merge({}, state, { pricing: 10000 })
      return newState;
    case CLEAR_ALL_FILTERS:
      return defaultFilters;
    default:
      return state;
  }
}

export default filtersReducer;