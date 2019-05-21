import { fetchAllSpots } from './spot_actions';

export const RECEIVE_SINGLE_FILTER = 'RECEIVE_SINGLE_FILTER';
export const RECEIVE_PRICING_FILTER = 'RECEIVE_PRICING_FILTER';
export const REMOVE_PRICING_FILTER = 'REMOVE_PRICING_FILTER';
export const RECEIVE_GROUP_FILTER = 'RECEIVE_GROUP_FILTER';
export const REMOVE_GROUP_FILTER = 'REMOVE_GROUP_FILTER';
export const REMOVE_SINGLE_FILTER = 'REMOVE_SINGLE_FILTER';
export const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS';
export const UPDATE_FILTER = "UPDATE_FILTER";

export const receiveSingleFilter = filter => ({
  type: RECEIVE_SINGLE_FILTER,
  filter,
})

export const removeSingleFilter = filter => ({
  type: REMOVE_SINGLE_FILTER,
  filter,
})

export const receivePricingFilter = amount => ({
  type: RECEIVE_PRICING_FILTER,
  amount,
})

export const removePricingFilter = () => ({
  type: REMOVE_PRICING_FILTER,
})

export const receiveGroupFilter = amount => ({
  type: RECEIVE_GROUP_FILTER,
  amount,
})

export const removeGroupFilter = () => ({
  type: REMOVE_GROUP_FILTER,
})

export const clearAllFilters = () => ({
  type: CLEAR_ALL_FILTERS
})

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value))
  return fetchAllSpots(getState().ui.mapBounds)(dispatch);
}